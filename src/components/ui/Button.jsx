import { cn } from "../../lib/utils"
import { forwardRef } from "react"

const Button = forwardRef(({ className, variant = "default", size = "default", asChild, ...props }, ref) => {
  const variants = {
    default: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white neon-glow",
    secondary: "bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white border border-slate-600",
    outline: "border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400",
    ghost: "hover:bg-white/10 text-white hover:text-blue-300",
    link: "underline-offset-4 hover:underline text-blue-400 hover:text-blue-300"
  }
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10"
  }
  
  const Comp = asChild ? "span" : "button"
  
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover-lift",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button }