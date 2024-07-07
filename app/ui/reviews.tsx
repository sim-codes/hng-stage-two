import Image from "next/image";
import { ArrowRightIcon, ChevronRightIcon, StarIcon } from "@heroicons/react/16/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

export default function ReviewsSection() {
    return (
        <section>
            <div className="max-w-screen grid justify-items-center content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-5 md:py-5 md:px-24  lg:py-5 lg:px-24">
        <div className="md:w-[60%] lg:w-[60%] flex flex-col justify-center sm:gap-7 p-3">
          <div className="">
            <p className="text-primary">WHAT THEY SAY</p>
            <h2 className="font-bold text-4xl">What Our Customers Say About Us</h2>
          </div>

          <div className="flex flex-col gap-7 text-sm">
            <p className="text-sm">
              “Master Chef is the best. Besides the many and delicious meals, 
              the service is also very good, especially in the very  fast delivery. 
              I highly recommend Master Chef  to you”.
            </p>

            <div className="w-full flex gap-2">
              <div className="w-14 h-14 bg-black rounded-full"></div>

              <div className="flex items-start gap-10">
                <div className="flex flex-col self-center">
                  <p className="font-bold">
                    Mercy Kalu
                  </p>
                  <p>Foodie</p>
                  <div className=""></div>
                </div>

                <div className="flex items-center gap-2">
                  <StarIcon className="h-5 w-5 text-secondary" />
                  <StarIcon className="h-5 w-5 text-secondary" />
                  <StarIcon className="h-5 w-5 text-secondary" />
                  <StarIcon className="h-5 w-5 text-secondary" />
                  <StarIcon className="h-5 w-5 text-secondary" />
                  <StarIconOutline className="h-5 w-5 text-secondary" />
                  <p className="text-sm">4,8</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative order-first md:order-last lg:order-last w-full h-[350px] sm:h-[750px] md:w-[80%] lg:w-[80%] md:h-[568px] lg:h-[568px] bg-transparent rounded-2xl overflow-hidden">
          <Image src="/images/chef.png" fill={true} alt="About image" className="object-cover" />
        </div>
      </div>
        </section>
    )
}