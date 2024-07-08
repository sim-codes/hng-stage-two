import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import FeatureSection from "./ui/home/featureSection";
import SearchSection from "./ui/home/searchSection";
import AdCarousel from "./ui/home/adCarousel";
import ReviewsSection from "./ui/reviews";

import how1Icon from "@/public/icons/how1.png";
import how2Icon from "@/public/icons/how2.png";
import how3Icon from "@/public/icons/how3.png";
import how4Icon from "@/public/icons/how4.png";
import how5Icon from "@/public/icons/how5.png";

import { Slide } from "@/app/lib/definitons";
import Carousel from "@/app/ui/home/carousel";

const slides: Array<Slide> = [
    { imageUrl: "/heroImage.png",
        slideText1: "Craving delicious food?",
        slideText2: "Discover the perfect dish for you",
     },
    {
        imageUrl: "/slide2.png",
        slideText1: "Indulge in our Mouth-Watering",
        slideText2: "Menu Today with Irresistible Food!",
     },
     {
        imageUrl: "/slide3.png",
        slideText1: "Satisfy your Cravings with ",
        slideText2: "Something Tasty! Click to order Now!",
     },
     {
        imageUrl: "/slide4.png",
        slideText1: "Don't Wait Any Longer,",
        slideText2: "Dive into our Amazing Menu",
     },
     {
        imageUrl: "/slide5.png",
        slideText1: "Treat yourself to a Culinary Delight",
        slideText2: "Place your order Now!",
     },
     {
        imageUrl: "/slide6.png",
        slideText1: "Hurry, Don’t Wait Anymore,",
        slideText2: "Tantalize your Taste Buds Today!!",
     },
]

const categories = [
  {
    name: "Swallow",
    image: "/swallow.png",
  },
  {
    name: "Soups",
    image: "/soup.png",
  },
  {
    name: "Noodles",
    image: "/noodle.png",
  },
  {
    name: "Snacks",
    image: "/snack.png",
  },
  {
    name: "Salads",
    image: "/salad.png",
  },
  {
    name: "Drinks",
    image: "/drinks.png",
  },
]

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen md:px-24 lg:px-24">

      <Carousel slides={slides} />
      <SearchSection />
      <FeatureSection />

      {/* About Section */}
      <div className="grid justify-items-center content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-5 md:py-5 lg:py-5">
        <div className="relative sm:order-1 w-full h-[350px] md:w-[80%] lg:w-[80%] md:h-[568px] lg:h-[468px] bg-black rounded-2xl overflow-hidden">
          <Image src="/images/about.png" fill={true} alt="About image" className="object-cover" />
        </div>

        <div className="md:w-[80%] lg:w-[80%] order-first md:order-last lg:order-last flex flex-col justify-center gap-7 p-3">
          <div className="">
            <p className="text-primary">ABOUT US</p>
            <h2 className="font-bold text-2xl">With Master Chef, Every Taste is a Celebration of Happiness</h2>
          </div>

          <div className="flex flex-col gap-7 text-sm">
            <p>
              From fluffy pastries to delicious meals, we pride ourselves 
              on using only the finest ingredients to create mouthwatering 
              masterpieces that will tantalize your taste buds. <br /><br />
              But don&lsquo;t just take our word for it and experience the 
              magic for yourself! Browse our irresistible selection, 
              place your order, and let the aroma of our fresh delicious 
              meals fill you with warmth and joy.
            </p>

            <div className="flex gap-5 text-sm">
              <button className="text-white bg-primary h-12 w-40 p-5 rounded-lg flex items-center justify-center">
                More About Us
              </button>
              <button className="text-primary bg-[#FFF7F5] h-12 w-40 p-5 rounded-lg flex items-center justify-center">
                Place Order
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sandwich Ad */}
      <AdCarousel />

      {/* Services Section */}
      <div className="max-w-screen grid justify-items-center content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-5 md:py-5 lg:py-5">
        <div className="relative sm:order-1 w-full h-[350px] md:w-[80%] lg:w-[80%] md:h-[568px] lg:h-[468px] bg-black rounded-2xl overflow-hidden">
          <Image src="/images/services.png" fill={true} alt="Services image" className="object-cover" />
        </div>

        <div className="md:w-[80%] lg:w-[80%] order-first md:order-last lg:order-last flex flex-col justify-center gap-7 p-3">
          <div className="">
            <p className="text-primary">OUR SERVICES</p>
            <h2 className="font-bold text-2xl">We Serve you the Freshness you Deserve Always</h2>
          </div>

          <div className="flex flex-col gap-7 text-sm">
            <p>
            Whether you&lsquo;re craving a sweet indulgence for yourself or searching for 
            the perfect gift to delight a loved one, Master Chef have you covered. <br /><br />
            We bring our flavor and freshness to anywhere your comfort demands. 
            you can step into our virtual world to order at will or Step into 
            our physical restaurant and discover a world of artisanal treats crafted 
            with love and passion to satisfy you
            </p>

            <div className="flex gap-5 text-sm">
              <button className="text-white bg-primary h-12 w-40 p-5 rounded-lg flex items-center justify-center">
                Check Our Menu
              </button>
              <button className="text-primary bg-[#FFF7F5] h-12 w-40 p-5 rounded-lg flex items-center justify-center">
                Place Order
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How doest it work */}
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold md:mt-7 lg:mt-7">How does it work</h1>
        <div className="w-full flex  gap-5 overflow-x-auto whitespace-nowrap no-scrollbar justify-between">
          <div className="flex m-2 flex-col gap-2 justify-center items-center min-w-56 md:w-56 lg:lg-56 min-h-44 bg-[#F9FAFB] rounded-lg p-3">
            <Image src={how1Icon} alt="How it works" width="70" />
            <p className="font-bold">Choose an Order</p>
            <p className="text-sm text-center text-wrap">Check over hundreds of menus to pick your favorite food</p>
          </div>

          <div className="flex m-2 flex-col gap-2 justify-center items-center min-w-56 md:w-56 lg:w-56 min-h-44 bg-[#F9FAFB] rounded-lg p-3">
            <Image src={how2Icon} alt="How it works" width="70" />
            <p className="font-bold">Make a Fair Bargain</p>
            <p className="text-sm text-center text-wrap">
              If the price is high for you, you have the option to make a fair bargain.
            </p>
          </div>

          <div className="flex m-2 flex-col gap-2 justify-center items-center min-w-56 md:w-56 lg:w-56 min-h-44 bg-[#F9FAFB] rounded-lg p-3">
            <Image src={how3Icon} alt="How it works" width="70" />
            <p className="font-bold">Select & Pair Deliver</p>
            <p className="text-sm text-center text-wrap">
              Select your location and be graced with the opportunity to pair delivery.
            </p>
          </div>

          <div className="flex m-2 flex-col gap-2 justify-center items-center min-w-56 md:w-56 lg:w-56 min-h-44 bg-[#F9FAFB] rounded-lg p-3">
            <Image src={how4Icon} alt="How it works" width="70" />
            <p className="font-bold">Make Payment</p>
            <p className="text-sm text-center text-wrap">
              It&lsquo;s quick, safe, and simple. Select several methods of payment.
            </p>
          </div>

          <div className="flex m-2 flex-col gap-2 justify-center items-center min-w-56 md:w-56 lg:w-56 min-h-44 bg-[#F9FAFB] rounded-lg p-3">
            <Image src={how5Icon} alt="How it works" width="70" />
            <p className="font-bold">Enjoy your Meal</p>
            <p className="text-sm text-center text-wrap">
              Food is made anddelivered directly to your home in quick time.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewsSection />    
    </main>
  );
}
