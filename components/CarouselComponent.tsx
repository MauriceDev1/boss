import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CardComponent } from './CardComponent';

const CarouselComponent = ({title}: {title:string}) => {
  return (
    <div className="w-full my-6 py-6">
        <h1 className='text-lg mb-3'>
          {title}
        </h1>
        <Carousel>
          <CarouselContent className="gap-5">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full">
              <CardComponent />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full">
              <CardComponent />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full">
              <CardComponent />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full">
              <CardComponent />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full">
              <CardComponent />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
  )
}

export default CarouselComponent;
