import Image from "next/image";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import HeroSection from "./ui/home/heroSection";
import FeatureSection from "./ui/home/featureSection";
import SearchSection from "./ui/home/searchSection";

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
    <main className="flex flex-col items-center min-h-screen">
      <HeroSection />
      <SearchSection />
      <FeatureSection />

      <div className="max-w-screen grid justify-items-center content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-5 md:py-5 md:px-24  lg:py-5 lg:px-24">
        <div className="relative sm:order-1 w-full h-[350px] md:w-[80%] lg:w-[80%] md:h-[568px] lg:h-[568px] bg-black rounded-2xl overflow-hidden">
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
              But don't just take our word for it and experience the 
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

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:p-24 lg:p-24">
        <div className="bg-[#F9FAFB] p-10 rounded-s-lg">
          <div className=" my-12">
            <p className="font-bold text-2xl">Best Offers <span className="text-primary">Crispy Sandwiches</span></p>
            <p className="text-sm">Enjoy the large size of sandwiches. Complete 
            perfect slice of sandwiches.</p>
          </div>

          <button className="w-full flex items-center justify-center gap-2 text-white text-sm bg-primary p-3 rounded-md">
            Proceed to order
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="relative col-span-2 bg-black rounded-e-lg w-full min-h-60 overflow-hidden">
          <Image src="/images/sandwich.png" fill={true} alt="Sandwich image" className="object-cover" />
        </div>
      </div>

      <div className="max-w-screen grid justify-items-center content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-5 md:py-5 md:px-24  lg:py-5 lg:px-24">
        <div className="relative sm:order-1 w-full h-[350px] md:w-[80%] lg:w-[80%] md:h-[568px] lg:h-[568px] bg-black rounded-2xl overflow-hidden">
          <Image src="/images/services.png" fill={true} alt="About image" className="object-cover" />
        </div>

        <div className="md:w-[80%] lg:w-[80%] order-first md:order-last lg:order-last flex flex-col justify-center gap-7 p-3">
          <div className="">
            <p className="text-primary">ABOUT US</p>
            <h2 className="font-bold text-2xl">We Serve you the Freshness you Deserve Always</h2>
          </div>

          <div className="flex flex-col gap-7 text-sm">
            <p>
            Whether you're craving a sweet indulgence for yourself or searching for 
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
    </main>
  );
}
