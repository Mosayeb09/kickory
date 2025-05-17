// "use client"
// import * as React from "react"
// import Image from "next/image"
// import Autoplay from "embla-carousel-autoplay"
// import { Carousel, CarouselNext, CarouselPrevious,CarouselItem, CarouselContent } from "@/components/ui/carousel"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// export function HomeCarousel ({items,

// }:{
//     items:{
//     image:string,
//     url:string,
//     title:string,
//     buttonCaption:string,

// }[]
// }){
//     const plugin = React.useRef(Autoplay({delay:3000,stopOnInteraction:true}))
//     return(
//         <Carousel 
//         dir="ltr"
//         plugins={[plugin.current]}
//         className="w-full mx-auto "
//         onMouseEnter={()=>plugin.current.stop()}
//         onMouseLeave={()=>plugin.current.reset()}
//         >
//             <CarouselContent>
//                 {items.map((item)=>(
//                     <CarouselItem key={item.title}>
//                         <Link href={item.url}>
//                         <div className="flex aspect-[16/6] items-center justify-center p-6 relative-m-1" >
//                         <Image 
//                             src={item.image}
//                             alt={item.title}
//                             fill
//                             className=" object-cover"
//                             priority
//                             loading="eager"
//                         >

                        

//                         </Image>
//                         <div className=" absolute w-1/3 left-16 md:left-32 top-1/2 transform-translate-y-1/2">
//                         <h2 className={cn( " text-xl md:text-6xl font-bold mb-4 text-primary")}>
//                             {item.title}

//                         </h2>
//                         <Button className="hidden md:black">
//                             {item.buttonCaption}

//                         </Button>


//                         </div>


//                         </div>
//                         </Link>

//                     </CarouselItem>
//                 ))}
//             </CarouselContent>
//             <CarouselPrevious className="left-0 md:left-12">


//             </CarouselPrevious>
//             <CarouselNext className="right-0 md:right-12">


//             </CarouselNext>

//         </Carousel>
//     )

// }
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel"

// import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function HomeCarousel({
  items,
}: {
  items: {
    image: string
    url: string
    title: string
    buttonCaption: string
  }[]
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <Carousel
      dir="ltr"
      plugins={[plugin.current]}
      className="w-full mx-auto"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.reset()}
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.title}>
            <Link href={item.url}>
              <div className="relative flex aspect-[16/6] items-center justify-center p-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute w-1/2 md:w-1/3 left-8 md:left-32 top-1/2 -translate-y-1/2">
                  <h2 className="text-2xl backdrop-blur-2xl md:text-4xl font-bold mb-4 text-primary">
                    {item.title}
                  </h2>
                  <Button className="hidden md:block ">
                    {item.buttonCaption}
                  </Button>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-2 md:left-12" />
      <CarouselNext className="right-2 md:right-12" />
    </Carousel>
  )
}

