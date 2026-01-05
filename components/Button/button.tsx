import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"
import { cn } from "@/components/lib/utils"

const buttonVariants = cva(
  // 기본 스타일 (모든 버튼에 공통으로 적용)
  "inline-flex items-center justify-center whitespace-nowrap rounded-8 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-on-primary hover:bg-primary-strong",
        secondary: "bg-bg-2 text-fg-secondary hover:bg-bg-3 hover:text-fg-primary ",
        outline: "border border-border-2 text-fg-secondary bg-transparent hover:border-border-1",
        ghost: "hover:bg-bg-1 text-fg-primary",
      },
      size: {
        default: "p2-b h-8",
        sm: "p3-b h-6 rounded-4",
        lg: "p1-b h-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

// 아이콘 크기를 size에 따라 반환
const getIconSize = (size?: "default" | "sm" | "lg" | null) => {
  switch (size) {
    case "sm":
      return "h-3 w-3"
    case "lg":
      return "h-5 w-5"
    default:
      return "h-4 w-4"
  }
}

// 패딩을 아이콘 상태에 따라 계산
const getPaddingClasses = (
  size?: "default" | "sm" | "lg" | null,
  hasStartIcon?: boolean,
  hasEndIcon?: boolean,
  hasChildren?: boolean
) => {
  const hasIcons = hasStartIcon || hasEndIcon
  const iconOnly = hasIcons && !hasChildren

  // 아이콘만 있는 경우 (children 없음)
  if (iconOnly) {
    switch (size) {
      case "sm":
        return "px-1.5"
      case "lg":
        return "px-3"
      default:
        return "px-2"
    }
  }

  // startIcon만 있는 경우
  if (hasStartIcon && !hasEndIcon) {
    switch (size) {
      case "sm":
        return "pl-2 pr-2.5"
      case "lg":
        return "pl-3 pr-4"
      default:
        return "pl-2.5 pr-3.5"
    }
  }

  // endIcon만 있는 경우
  if (!hasStartIcon && hasEndIcon) {
    switch (size) {
      case "sm":
        return "pl-2.5 pr-2"
      case "lg":
        return "pl-4 pr-3" 
      default:
        return "pl-3.5 pr-2.5"
    }
  }

  // 아이콘이 없는 경우 (기본 패딩)
  switch (size) {
    case "sm":
      return "px-2.5"
    case "lg":
      return "px-4"
    default:
      return "px-3.5"
  }
}

// startIcon과 endIcon은 동시에 사용할 수 없습니다
export type ButtonProps = (
  | {
      startIcon?: React.ReactNode
      endIcon?: never
    }
  | {
      startIcon?: never
      endIcon?: React.ReactNode
    }
  | {
      startIcon?: never
      endIcon?: never
    }
) &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean
    fullWidth?: boolean
  }

// Button 컴포넌트
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disabled, loading, fullWidth, startIcon, endIcon, children, ...props }, ref) => {
    // startIcon과 endIcon이 동시에 있으면 에러
    if (startIcon && endIcon) {
      throw new Error("Button: startIcon and endIcon cannot be used together. Use only one.")
    }

    const hasStartIcon = !!startIcon && !loading
    const hasEndIcon = !!endIcon && !loading
    const hasChildren = !!children
    const isLoading = !!loading

    // loading일 때는 스피너를 startIcon 위치에 표시
    const paddingClasses = getPaddingClasses(
      size,
      hasStartIcon || isLoading,
      hasEndIcon,
      hasChildren
    )
    const iconSize = getIconSize(size)

    return (
      <button
        className={cn(
          buttonVariants({ variant, size }),
          paddingClasses,
          (hasStartIcon || hasEndIcon || isLoading) && "gap-1",
          fullWidth && "w-full",
          className
        )}
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <span className={cn("inline-flex items-center", iconSize)}>
              <Loader2 className="animate-spin" />
            </span>
            {hasChildren && <span>{children}</span>}
          </>
        ) : (
          <>
            {hasStartIcon && (
              <span className={cn("inline-flex items-center", iconSize)}>
                {startIcon}
              </span>
            )}
            {hasChildren && <span>{children}</span>}
            {hasEndIcon && (
              <span className={cn("inline-flex items-center", iconSize)}>
                {endIcon}
              </span>
            )}
          </>
        )}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

