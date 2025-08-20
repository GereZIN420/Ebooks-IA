import { cn } from "../../lib/utils"

function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "border-transparent bg-blue-600/20 text-blue-300 border border-blue-500/30",
    secondary: "border-transparent bg-purple-600/20 text-purple-300 border border-purple-500/30",
    outline: "text-foreground border-slate-600",
    success: "border-transparent bg-green-600/20 text-green-300 border border-green-500/30",
    destructive: "border-transparent bg-red-600/20 text-red-300 border border-red-500/30"
  }
  
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }