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
    </main>
  );
}
