import SearchSection from "../ui/home/searchSection"
import SnackSection from "../ui/meals/snacksSection"
import ReviewsSection from "../ui/reviews"
import { Snacks, Soups, MealsMenu, Swallow,
    Salads, Coffees, Drinks, IceCreams
} from "../lib/data"
import OfferSection from "../ui/meals/offerSection"
import BannerImage from "@/public/images/mealsBanner.png"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Meals',
};

export default function Meals() {
    return (
        <main className="flex flex-col items-center min-h-screen md:px-24 lg:px-24">
            <div className="max-w-screen h-auto md:rounded-2xl lg:rounded-2xl overflow-hidden">
                <Image src={BannerImage} alt="Footer Top image" className="object-conver rounded-lg" />
            </div>

            <SearchSection />
            <SnackSection snacks={Snacks} menu="Snack" />
            <SnackSection snacks={Soups} menu="Soups" />
            <SnackSection snacks={MealsMenu} menu="Meals" />
            <SnackSection snacks={Salads} menu="Salad" />
            <SnackSection snacks={Coffees} menu="Coffee & Tea" />
            <SnackSection snacks={Drinks} menu="Drinks" />
            <SnackSection snacks={IceCreams} menu="Ice Creams" />
            <SnackSection snacks={Swallow} menu="Swallow" />

            <OfferSection />
            <ReviewsSection />
        </main>
    )
}