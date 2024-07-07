import Image from "next/image"
import { FeaturedMenu } from "@/app/lib/data"
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/outline"
import { StarIcon, TagIcon, ClockIcon, ArrowRightIcon } from "@heroicons/react/16/solid"
import clsx from "clsx"

export default function SaveDelicacies() {
    return (
        <section className="self-stretch p-5 md:px-24 lg:px-24 mb-5">
            <div className="flex justify-between">
                <h2 className="font-bold text-2xl">Saved delicacies</h2>
                <button className="flex justify-center items-center gap-2 rounded-md text-gray-400 underline font-bold max-w-40 p-2">
                    sell all offers
                </button>
            </div>

            <div className="flex gap-10 overflow-x-auto whitespace-nowrap my-4">
                {FeaturedMenu.map((menu) => (
                    <div key={menu.id} className="flex flex-col gap-2">
                        <div className="relative min-w-64 min-h-64 bg-gray-200 rounded-xl flex items-center justify-center
                            overflow-hidden">
                            <Image src={menu.image} alt="Burger" fill={true} className="z-0 object-cover" />

                            <div className="absolute z-10 top-5 left-5 flex gap-2">
                                <p className="flex items-center gap-2 justify-center bg-primary text-white font-bold rounded-md p-2">
                                    <TagIcon className="h-4 w-4" />
                                    {menu.offer}
                                </p>
                                <p className="flex items-center justify-center gap-2 bg-secondary text-white font-bold rounded-md p-2">
                                    <ClockIcon className="h-4 w-4" />
                                    {menu.delivery}
                                </p>
                            </div>

                            <div className="absolute bottom-4 left-5 w-[90%] flex justify-between gap-2">
                                <p className={clsx("flex items-center rounded-full text-sm px-2 py-1",
                                    menu.availble? "bg-[#EAFFF3] text-[#03A900]" : "bg-[#FFF2ED] text-primary")}>
                                    {menu.status}
                                </p>
                                <p className="flex h-10 w-10 items-center justify-center bg-white  font-bold rounded-full px-2 py-1">
                                    <HeartIcon className="h-4 w-4" />
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="font-bold text-lg">{menu.name}</p>
                            <div className="flex">
                                <StarIcon className="h-5 w-5 text-[#FCD507]" />
                                <p className="text-[#FCD507]">46</p>
                            </div>
                        </div>

                        <div className="self-stretch flex justify-between">
                            <p className="text-2xl font-bold">${menu.price}</p>

                            <button className="flex gap-2 items-center p-1 border border-primary text-primary rounded-md">
                                Add to Cart
                                <ShoppingCartIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}