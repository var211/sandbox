import { cn } from "@/lib/utils"

export const Heading = ({ className, ...props }: React.ComponentProps<"h1">) => (
  <h1
    className={cn(
      "font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl",
      "my-(--spacing2) md:my-(--spacing3) lg:my-(--spacing4) xl:my-(--spacing5)",
      className
    )}
    {...props}
  />
)
