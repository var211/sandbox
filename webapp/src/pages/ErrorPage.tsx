import { Heading } from "@/components/Heading"
import { Section } from "@/components/Section"
import { isRouteErrorResponse, useRouteError } from "react-router"

export const ErrorPage = () => {
  const error = useRouteError()
  let errorMessage = "Unknown Error"
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText
  } else if (error instanceof Error) {
    errorMessage = error.message
  }

  return (
    <Section className="flex flex-col gap-(--spacing4) text-center py-(--spacing4) md:py-(--spacing8)">
      <Heading>Oops!</Heading>
      <p className="md:text-lg lg:text-xl xl:text-2xl">{errorMessage}</p>
      <a className="underline" href="/">Return to Home</a>
    </Section>
  )
}
