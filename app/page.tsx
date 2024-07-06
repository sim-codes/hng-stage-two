import HeroSection from "./ui/home/heroSection";
import { MagnifyingGlassMinusIcon } from "@heroicons/react/16/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import FeatureSection from "./ui/home/featureSection";

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

      <section className="self-stretch flex flex-col m-14 px-24">
        <div className="flex justify-between items-center my-2">
          <h2 className="font-bold text-2xl">Search by categories</h2>

          <div className="flex justify-between gap-2 w-fit">
            <div className="flex gap-2 items-center bg-[#F9FAFB] border rounded-full p-2">
              <input type="text" placeholder="Search for food..." 
              className="p-1 focus:outline-none focus:border-none max-w-2xl text-[#BCB9B4]" />
              <MagnifyingGlassMinusIcon className="h-5 w-5 text-[#BCB9B4]" />
            </div>

            <button className="flex justify-center items-center bg-[#F9FAFB]  text-[#BCB9B4] rounded-full w-12 h-12 border">
              <FunnelIcon className="h-5 w-5" />
            </button>         
          </div>
        </div>

        <div className="flex gap-8">
          <div className="m-2 flex flex-col items-center gap-3">
            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
              overflow-hidden bg-[url('/swallow.png')] bg-no-repeat bg-center bg-cover">
            </div>
              <p className="font-bold">Swallow</p>
          </div>
          <div className="m-2 flex flex-col items-center gap-3">
            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
              overflow-hidden bg-[url('/soup.png')] bg-no-repeat bg-center bg-cover">
            </div>
              <p className="font-bold">Soups</p>
          </div>
          <div className="m-2 flex flex-col items-center gap-3">
            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
              overflow-hidden bg-[url('/noodle.png')] bg-no-repeat bg-center bg-cover">
            </div>
              <p className="font-bold">Noodles</p>
          </div>
          <div className="m-2 flex flex-col items-center gap-3">
            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
              overflow-hidden bg-[url('/snack.png')] bg-no-repeat bg-center bg-cover">
            </div>
              <p className="font-bold">Snacks</p>
          </div>
          <div className="m-2 flex flex-col items-center gap-3">
            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
              overflow-hidden bg-[url('/salad.png')] bg-no-repeat bg-center bg-cover">
            </div>
              <p className="font-bold">Salads</p>
          </div>
          <div className="m-2 flex flex-col items-center gap-3">
            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
              overflow-hidden bg-[url('/drinks.png')] bg-no-repeat bg-center bg-cover">
            </div>
              <p className="font-bold">Drinks</p>
          </div>
        </div>
      </section>

      <FeatureSection />
    </main>
  );
}
