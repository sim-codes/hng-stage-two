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
        </section>
    );
}