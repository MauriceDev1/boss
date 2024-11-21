"use client"

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cellphone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission, like sending data to an API or email
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 max-w-xl mx-auto border rounded-lg shadow-lg bg-white">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="mt-1"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="mt-1"
        />
      </div>

      <div>
        <label htmlFor="cellphone" className="block text-sm font-medium text-gray-700">Cellphone</label>
        <Input
          id="cellphone"
          name="cellphone"
          type="tel"
          value={formData.cellphone}
          onChange={handleChange}
          placeholder="Your Cellphone"
          className="mt-1"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
        <Select
          name="subject"
          value={formData.subject}
          onValueChange={(value) => setFormData((prev) => ({ ...prev, subject: value }))}
        >
          <SelectTrigger className="mt-1 w-full">
            <SelectValue placeholder="Select a Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
            <SelectItem value="Support">Support</SelectItem>
            <SelectItem value="Feedback">Feedback</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="mt-1"
        />
      </div>

      <Button type="submit" className="w-full hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </Button>
    </form>
  )
}

export default Contact
