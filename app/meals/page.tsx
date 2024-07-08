
import HeroSection from "../ui/home/heroSection"
import SearchSection from "../ui/home/searchSection"
import SnackSection from "../ui/meals/snacksSection"
import ReviewsSection from "../ui/reviews"
import { Snacks, Soups, MealsMenu, Swallow,
    Salads, Coffees, Drinks, IceCreams
} from "../lib/data"
import OfferSection from "../ui/meals/offerSection"

export default function Meals() {
    return (
        <main className="flex flex-col items-center min-h-screen">
            <HeroSection />
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