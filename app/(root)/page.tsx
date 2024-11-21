import CarouselComponent from "@/components/CarouselComponent";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <CarouselComponent title="Featured Companions" />
      <CarouselComponent title="New Companions" />
      <div className="py-6 w-fullh-56 bg-gray-200 rounded-md h-56">

      </div>
      <CarouselComponent title="Online Companions" />
      <CarouselComponent title="Female Companions" />
      <div className="py-6 w-fullh-56 bg-gray-200 rounded-md h-56">

      </div>
      <CarouselComponent title="Male Companions" />
      <CarouselComponent title="Other Companions" />
    </>
  );
}
