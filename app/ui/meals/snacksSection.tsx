"use client";

import Image from "next/image"
import { ShoppingCartIcon, CurrencyDollarIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { MenuData } from "@/app/lib/definitons"
import { useCartState } from "@/app/ui/context"

export default function SnackSection({ snacks, menu }: { snacks: Array<MenuData>, menu: string}) {
    const {addToCart } = useCartState()

    return (
        <section className="self-stretch p-5 mb-5">
            <div className="flex justify-between">
                <h2 className="font-bold text-2xl">{menu}</h2>
                <button className="flex justify-center font-bold items-center gap-2 bg-transparent rounded-md text-gray-400 max-w-40 p-2">
                    View all
                    <ArrowRightIcon className="h-4 w-4" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-2">
                {snacks.map((menu) => (
                    <div key={menu.id} className="flex flex-col gap-5 my-2">
                        <div className="relative w-full h-72 bg-black rounded-xl flex items-center justify-center
                            overflow-hidden">
                            <Image src={menu.image} alt="Burger" fill={true} className="z-0 object-cover" />
                            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t to-transparent from-black"></div>

                            <div className="z-20 absolute bottom-14 left-0 w-full flex justify-between items-center gap-2 px-8">
                                <p className="font-bold text-lg text-white">{menu.name}</p>
                                
                                <button onClick={() => addToCart(menu.id)} className="flex w-24 gap-2 items-center justify-center p-1 border border-primary text-white text-sm bg-primary rounded-md">
                                    Buy
                                    <ShoppingCartIcon className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="z-20 absolute bottom-4 left-0 w-full flex justify-between items-center gap-2 px-8">
                                <p className="font-bold text-secondary text-md">₦ {menu.price} (per plate)</p>
                                
                                <button className="flex w-24 gap-2 items-center justify-center p-1 text-white text-sm">
                                    <CurrencyDollarIcon className="h-5 w-5" />
                                    Bargain
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}