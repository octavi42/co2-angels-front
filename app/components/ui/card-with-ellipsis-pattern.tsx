import { cn } from '@/lib/utils'

interface PatternCardProps {
  children: React.ReactNode
  className?: string
  patternClassName?: string
  gradientClassName?: string
}

export function PatternCard({ 
  children, 
  className,
  patternClassName,
  gradientClassName
}: PatternCardProps) {
  return (
    <div className={cn(
      "border w-full rounded-lg overflow-hidden",
      "bg-background/50 backdrop-blur-sm",
      "border-border/50",
      "shadow-lg hover:shadow-xl",
      "transition-all duration-300 ease-in-out",
      "hover:scale-[1.02] hover:border-border",
      "p-1",
      "overflow-x-hidden", // Add this line
      className
    )}>
      <div className={cn(
        "size-full bg-repeat bg-[length:30px_30px] p-4",
        "bg-dot-pattern-light dark:bg-dot-pattern",
        patternClassName
      )}>
        <div className={cn(
          "size-full",
          "from-background/90 via-background/40 to-background/10",
          gradientClassName
        )}>
          {children}
        </div>
      </div>
    </div>
  )
}

export function PatternCardBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-left p-4 md:p-6 overflow-x-hidden", className)} {...props} />;
}

