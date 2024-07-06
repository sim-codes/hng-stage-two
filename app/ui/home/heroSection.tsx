import Image from "next/image";
import { Slide } from "@/app/lib/definitons";
import Carousel from "./carousel";

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

export default function HeroSection(){

    return (
        <section className="relative flex flex-col items-center">
            <Carousel slides={slides} />
            <div className="relative w-screen h-[512px] hidden flex-col justify-center items-center bg-black
            md:w-[1488px] md:h-[705px] lg:w-[1488px] lg:h-[705px] overflow-hidden sm:rounded-2xl lg:rounded-2xl">
                <Image src="/heroImage.png" alt="Hero Image" fill={true}
                    className="z-0 object-cover opacity-30" />
                <div className="absolute z-10 flex flex-col justify-center items-center md:gap-5 p-12">
                    <p className="text-white font-bold text-2xl md:text-4xl lg:text-6xl text-center">Craving delicious food?
                    </p>
                    <p className="text-white font-bold text-2xl md:text-4xl lg:text-6xl text-center text-wrap">
                        <span className="text-[#FCD507]">Discover</span> the perfect dish for you
                    </p>
                </div>
            </div>

            
        </section>
    );
}