import { Heading } from "@/components/Heading"
import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { logger } from "@/utils/logger"
import { Form, redirect } from "react-router"
import { api } from "@/api"

export const actionLoginPage = async ({ request }: { request: Request }) => {
  const formData = await request.formData()
  const email = formData.get('email') as string
  if (!email) {
    throw new Error('email is missing')
  }
  const password = formData.get('password') as string
  if (!password) {
    throw new Error('password is missing')
  }
  await api.login(email, password)
  return redirect('/account')
}

export const LoginPage = () => (
  <Section>
    <Heading>Login Page</Heading>
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email and password below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form method="POST">
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email:</Label>
              <Input id="email" type="text" name="email" autoComplete="email" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password:</Label>
              <Input id="password" type="password" name="password" autoComplete="current-password" required />
            </div>
            <div>
              <Button className="cursor-pointer" type="submit">Login</Button>
            </div>
          </div>
        </Form>
      </CardContent>
    </Card>
  </Section>
)
