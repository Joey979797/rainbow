import * as React from "react"
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Check } from "lucide-react"

import { cn } from "@/components/lib/utils"
import { Button } from "@/components/Button/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/SelectBox/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/SelectBox/popover"

export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
  icon?: React.ReactNode
}

export interface SelectBoxProps {
  options: SelectOption[]
  value?: string | number | null
  onChange?: (value: string | number | null) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  label?: string
  renderOption?: (option: SelectOption) => React.ReactNode
  renderValue?: (option: SelectOption | null) => React.ReactNode
}

const SelectBox = React.forwardRef<HTMLButtonElement, SelectBoxProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = "선택하세요...",
      disabled = false,
      className,
      label,
      renderOption,
      renderValue,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)

    // 선택된 옵션 찾기
    const selectedOption = React.useMemo(
      () => options.find((opt) => opt.value === value) || null,
      [options, value]
    )

    const handleSelect = React.useCallback((selectedValue: string) => {
      const option = options.find((opt) => String(opt.value) === selectedValue)
      if (option?.disabled) return

      const newValue = selectedValue === String(value) ? null : option?.value ?? null
      onChange?.(newValue)
      setOpen(false)
    }, [options, value, onChange])

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation()
      onChange?.(null)
    }

    const displayValue = React.useMemo(() => {
      if (renderValue) {
        return renderValue(selectedOption)
      }
      
      if (selectedOption) {
        return selectedOption.icon
          ? (
              <div className="flex items-center gap-2">
                {selectedOption.icon}
                <span>{selectedOption.label}</span>
              </div>
            )
          : selectedOption.label
      }
      
      return placeholder
    }, [selectedOption, renderValue, placeholder])

    return (
      <div className={cn("w-full", className)}>
        {/* Label */}
        {label && (
          <label className="block text-p3-b text-fg-secondary mb-1.5">
            {label}
          </label>
        )}

        <div className="w-full">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                ref={ref}
                variant="outline"
                size="default"
                fullWidth
                role="combobox"
                aria-expanded={open}
                disabled={disabled}
                className={cn(
                  "h-10 justify-start p-0 items-stretch [&>span]:flex [&>span]:w-full",
                  !selectedOption && "text-fg-subtle"
                )}
              >
                <div className="flex items-center justify-between w-full gap-2 min-w-0 px-3.5 h-full">
                  <span className="flex-1 text-left p2 text-fg-tertiary min-w-0">
                    {displayValue}
                  </span>
                  <div className="flex items-center gap-1.5 shrink-0 pr-0.5">
                    {/* Clear Button */}
                    {selectedOption && !disabled && (
                      <button
                        type="button"
                        onClick={handleClear}
                        className="flex items-center justify-center rounded-full transition-colors text-fg-tertiary hover:text-fg-secondary hover:bg-bg-2 w-4 h-4 shrink-0"
                        aria-label="선택 해제"
                      >
                        <XMarkIcon className="w-4 h-4" />
                      </button>
                    )}
                    <ChevronDownIcon
                      className={cn(
                        "w-4 h-4 text-fg-tertiary transition-transform shrink-0",
                        open && "rotate-180"
                      )}
                    />
                  </div>
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
            <Command>
              <CommandInput placeholder="검색어를 입력하세요." className="h-9" />
              <CommandList>
                <CommandEmpty>옵션이 없습니다</CommandEmpty>
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={String(option.value)}
                      onSelect={handleSelect}
                      disabled={option.disabled}
                    >
                      {renderOption ? (
                        renderOption(option)
                      ) : option.icon ? (
                        <div className="flex items-center gap-2">
                          {option.icon}
                          <span>{option.label}</span>
                        </div>
                      ) : (
                        option.label
                      )}
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          value === option.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        </div>
      </div>
    )
  }
)

SelectBox.displayName = "SelectBox"

export { SelectBox }

