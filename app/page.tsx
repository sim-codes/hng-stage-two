import HeroSection from "./ui/home/heroSection";
import Image from "next/image";

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
        <div className="my-2">
          <h2 className="font-bold text-2xl">Search by categories</h2>
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
    </main>
  );
}
