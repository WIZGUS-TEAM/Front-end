
import { Slot } from "@radix-ui/react-slot"
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/app/lib/utils"

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, keyof ButtonHTMLAttributes<HTMLButtonElement>> {
  asChild?: boolean
  variant?: "primary" | "secondary" | "outline" | "ghost" | "solid"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
  className?: string
  children?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", asChild = false, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : motion.button

    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
    
    const variants = {
      primary: "bg-gradient-to-r from-[#2f01ad] to-[#0095de] text-white hover:from-[#2f01ad]/90 hover:to-[#0095de]/90",
      secondary: "bg-white text-[#2f01ad] border-2 border-[#2f01ad] hover:bg-[#2f01ad] hover:text-white",
      outline: "border-2 border-white text-white hover:bg-white hover:text-[#2f01ad]",
      ghost: "text-white hover:bg-white/10",
      solid: "bg-[#0095de] text-white hover:bg-[#0095de]/90 border-0"
    }

    const sizes = {
      sm: "text-sm px-3 py-1.5 h-8",
      md: "text-base px-4 py-2 h-10",
      lg: "text-lg px-6 py-3 h-12"
    }

    const buttonStyles = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      "shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0",
      className
    )

    return (
      <Comp
        ref={ref}
        className={buttonStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : null}
        {children}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button }
