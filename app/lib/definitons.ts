import { List } from "postcss/lib/list";

export type Slide = {
    imageUrl: string;
    slideText1: string;
    slideText2: string;
}

export type CarouselProps = {
    slides: Array<Slide>;
}