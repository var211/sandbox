import { cn } from "@/lib/utils"

export const Section = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <section
    className={cn(
      "mx-auto w-full max-w-(--breakpoint-xl) px-(--spacing4) md:px-(--spacing8)",
      className
    )}
    {...props}
  />
)
