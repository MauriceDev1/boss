'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
// import { Toaster } from "@/components/ui/toaster"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

async function onSubmit(values: z.infer<typeof formSchema>) {
  // This is where you would typically call your API or Server Action
  console.log(values);
  // For demonstration, we'll just simulate an API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return { success: true }
}

export default function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const result = await onSubmit(values)
      if (result.success) {
        // Toaster({
        //   title: "Logged in successfully!",
        //   description: "Welcome back!",
        // })
        router.push('/dashboard') // Redirect to dashboard or home page after login
      }
    } catch (error) {
      console.log(error)
      // Toaster({
      //   title: "Error",
      //   description: "There was a problem logging in to your account.",
      //   variant: "destructive",
      // })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Log In</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log in"}
          </Button>
        </form>
      </Form>
    </>
  )
}
