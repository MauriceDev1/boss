import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'

export const CardComponent = () => {
  return (
    <Card>
        <CardHeader>
            <div className='h-56 mb-3 bg-gray-100'>

            </div>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <Button>View More</Button>
        </CardFooter>
    </Card>
  )
}
