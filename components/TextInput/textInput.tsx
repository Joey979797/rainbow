import * as React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/components/lib/utils';

const containerStyles = 'w-full rounded-8 bg-bg-1 inline-flex items-center px-4 h-11 gap-2 transition-all duration-200 border';

const iconButtonStyles = 'flex items-center justify-center rounded-full transition-colors text-fg-tertiary hover:text-fg-secondary w-4 h-4';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  onClearClick?: () => void;
  debounceMs?: number;
  status?: 'default' | 'error';
  label?: string;
  disabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      value: controlledValue,
      onChange,
      leftSlot,
      rightSlot,
      onClearClick,
      debounceMs,
      status = 'default',
      label,
      disabled,
      ...props
    },
    ref
  ) => {
    // Uncontrolled mode를 위한 내부 state
    const [internalValue, setInternalValue] = React.useState('');
    // 디바운스 사용 시 화면 표시를 위한 state (Controlled/Uncontrolled 모두 사용)
    const [displayValue, setDisplayValue] = React.useState<string | number | readonly string[] | undefined>(undefined);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const debounceTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    // Controlled vs Uncontrolled 판단
    const isControlled = controlledValue !== undefined;
    
    // 디바운스 사용 여부
    const hasDebounce = debounceMs && debounceMs > 0;
    
    // 화면에 표시할 값 결정
    const value = hasDebounce
      ? (displayValue !== undefined ? displayValue : (isControlled ? controlledValue : internalValue))
      : (isControlled ? controlledValue : internalValue);
    const hasValue = value && String(value).length > 0;
    
    // 부모가 value를 변경하면 displayValue도 동기화
    React.useEffect(() => {
      if (hasDebounce && isControlled) {
        setDisplayValue(controlledValue);
      }
    }, [controlledValue, hasDebounce, isControlled]);

    React.useImperativeHandle(ref, () => inputRef.current!);

    // 디바운스 타이머 정리
    React.useEffect(() => {
      return () => {
        if (debounceTimerRef.current) {
          clearTimeout(debounceTimerRef.current);
        }
      };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      
      if (hasDebounce) {
        // 디바운스 사용: 화면 즉시 표시 + onChange 디바운스 후 호출
        if (!isControlled) {
          setInternalValue(newValue);
        } else {
          setDisplayValue(newValue);
        }
        
        // 이전 타이머 정리
        if (debounceTimerRef.current) {
          clearTimeout(debounceTimerRef.current);
        }

        // 디바운스 후 onChange 호출 (API 호출 등)
        const syntheticEvent = {
          ...e,
          target: {
            ...e.target,
            value: newValue,
          },
        } as React.ChangeEvent<HTMLInputElement>;

        debounceTimerRef.current = setTimeout(() => {
          onChange?.(syntheticEvent);
        }, debounceMs);
      } else {
        // 디바운스 없음: 화면 즉시 표시 + onChange 즉시 호출
        if (!isControlled) {
          setInternalValue(newValue);
        }
        onChange?.(e);
      }
    };

    // clear 핸들러 (무조건 디바운스 없이 즉시 동작)
    const handleClear = () => {
      // 디바운스 타이머 정리 (진행 중인 디바운스 취소)
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = null;
      }

      if (!isControlled) {
        setInternalValue('');
        if (inputRef.current) {
          inputRef.current.value = '';
        }
      } else if (hasDebounce) {
        setDisplayValue('');
      }
      
      if (onChange && inputRef.current) {
        const syntheticEvent = {
          target: {
            ...inputRef.current,
            value: '',
          },
          currentTarget: inputRef.current,
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
      
      onClearClick?.();
    };

    return (
      <div className={cn('w-full', className)}>
        {/* Label */}
        {label && (
          <label className="block p3-b text-fg-secondary mb-1.5">
            {label}
          </label>
        )}
        
        <div className={cn(
          containerStyles,
          status === 'error' 
            ? 'border-danger focus-within:border-danger' 
            : 'border-transparent focus-within:border-border-1',
          disabled && 'opacity-50 pointer-events-none'
        )}>
          {/* 왼쪽 슬롯 */}
          {leftSlot && (
            <div className="flex items-center">
              {leftSlot}
            </div>
          )}

          <input
            className="flex-1 bg-transparent text-fg-primary placeholder:text-fg-tertiary focus:outline-none p1 disabled:cursor-not-allowed disabled:opacity-50"
            ref={inputRef}
            value={isControlled ? value : undefined}
            defaultValue={!isControlled ? value : undefined}
            onChange={handleChange}
            disabled={disabled}
            {...props}
          />

          {/* 오른쪽 슬롯: clear 버튼과 rightSlot */}
          <div className="flex items-center gap-1.5">
            {/* X 버튼 (입력값이 있을 때만 표시) */}
            {hasValue && !disabled && (
              <button
                onClick={handleClear}
                className={cn(iconButtonStyles, 'hover:text-fg-primary')}
                aria-label="지우기"
              >
                <XMarkIcon className="w-4 h-4" />
              </button>
            )}

            {/* 오른쪽 슬롯 */}
            {rightSlot && (
              <div className="flex items-center">
                {rightSlot}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
