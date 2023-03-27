"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}>
        <div>
          <Image
            src="https://links.papareact.com/gi1"
            height={600}
            width={1400}
            loading="lazy"
            alt="Banner 1"
          />
        </div>
        <div>
          <Image
            src="https://links.papareact.com/6ff"
            height={600}
            width={1400}
            loading="lazy"
            alt="Banner 1"
          />
        </div>
        <div>
          <Image
            src="https://links.papareact.com/7ma"
            height={600}
            width={1400}
            loading="lazy"
            alt="Banner 1"
          />
        </div>
      </Carousel>
    </div>
  );
}
