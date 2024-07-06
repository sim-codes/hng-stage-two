import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";

export default function HeroSection(){
    return (
        <section className="relative flex flex-col items-center">
            <div className="relative flex flex-col justify-center items-center bg-black  md:w-[1488px] md:h-[705px] overflow-hidden rounded-2xl">
                <Image src="/heroImage.png" alt="Hero Image" fill={true}
                className="z-0 object-cover opacity-30" />
                <div className="absolute z-10 flex flex-col justify-center items-center gap-5">
                    <p className="text-white font-bold text-6xl">Craving delicious food?
                    </p>
                    <p className="text-white font-bold text-6xl text-wrap">
                        <span className="text-[#FCD507]">Discover</span> the perfect dish for you
                    </p>
                </div>
            </div>

            <button className="absolute bg-white top-1/2 -left-8 rounded-full p-3">
                <ArrowLeftIcon className="h-8 w-8" />
            </button>
            <button className="absolute bg-[#FCD507] top-1/2 -right-8 rounded-full p-3">
                <ArrowRightIcon className="h-8 w-8 text-white" />
            </button>

            <div className="absolute bottom-10 flex justify-center gap-4">
                <button className="bg-[#FCD507] rounded-full w-3 h-3"></button>
                <button className="bg-white rounded-full w-3 h-3"></button>
                <button className="bg-white rounded-full w-3 h-3"></button>
                <button className="bg-white rounded-full w-3 h-3"></button>
                <button className="bg-white rounded-full w-3 h-3"></button>
                <button className="bg-white rounded-full w-3 h-3"></button>
            </div>
        </section>
    );
}