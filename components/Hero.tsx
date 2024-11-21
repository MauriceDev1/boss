import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='w-full md:h-[70vh]'>
        <div className='w-full flex flex-wrap h-full md:flex-col'>
            <div className='w-full flex md:w-1/2 h-full md:pr-6'>
                <div className='m-auto md:pl-6'>
                    <h1 className='text-5xl'>Meet A Companion</h1>
                    <p className='py-8 text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis molestiae qui rem accusamus nulla dicta, soluta inventore error sed. Repudiandae voluptates provident nostrum, odit non veritatis obcaecati voluptate voluptatem nesciunt sit? Voluptatem, sint alias consequatur esse asperiores adipisci recusandae?

                    </p>
                    <Link href='/city'>
                        <Button>Book Now</Button>
                    </Link>
                </div>
            </div>
            <div className='w-full md:w-1/2 bg-gray-200 rounded-md h-full'>

            </div>
        </div>
    </section>
  )
}

export default Hero
