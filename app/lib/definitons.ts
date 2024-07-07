import { List } from "postcss/lib/list";

export type Slide = {
    imageUrl: string;
    slideText1: string;
    slideText2: string;
}

export type CarouselProps = {
    slides: Array<Slide>;
}

export type Snack = {
    id: number;
    name: string;
    price: number;
    image: string;
}
