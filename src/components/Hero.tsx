"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const data = [
  "/images/Slide 1.jpg",
  "/images/slide 2.jpg",
  "/images/slide 3.jpg",
  "/images/Slide 4.jpg",
];

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-82px)]">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        navigation={true}
        speed={500}
        modules={[Autoplay, Navigation, Pagination]}
        className="w-full h-full"
      >
        {data.map((url, i) => (
          <SwiperSlide key={i + url}>
            <div className="w-full h-full relative">
              <Image
                src={url}
                alt="food"
                fill
                priority
                className="w-full h-full object-cover"
              />
              <div className="absolute z-[1] top-0 right-0 left-0 bottom-0 w-full h-full bg-black/20"></div>
              <div className="absolute z-[2] top-0 left-0 right-0 bottom-0 w-full h-full container mx-auto text-center flex flex-col gap-5 items-center justify-center text-white md:p-20">
                <h1 className="text-5xl md:text-7xl font-bold">
                  Tasty Recipes for Every Tummy
                </h1>
                <p className="md:text-xl">
                  Explore Yummy😋Tummys curated collection of mouthwatering
                  recipes! From quick weekday dinners to indulgent desserts, we
                  have got you covered with easy-to-follow instructions and
                  tantalizing flavors. Join our culinary journey and delight
                  your taste buds with our scrumptious creations, perfect for
                  every occasion and craving!
                </p>
                <Link href="/#get_started">
                  <Button size="lg" className="md:text-xl bg-pink-500">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
