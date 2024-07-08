"use client";

import { useState, useEffect } from "react";
import Image from "next/image"
import { useCartState } from "../context";
import { ChevronRightIcon, XMarkIcon, MinusIcon, PlusIcon } from "@heroicons/react/16/solid"
import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { Cart } from "@/app/lib/definitons"



export default function CartItems(){
    const { cart, cartState, removeFromCart } = useCartState()
    
    
    
    return(
        <div className="bg-[#fff] rounded-lg p-5 my-14">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
                <div className="md:col-span-4 lg:col-span-4">
                    
                    <div className="flex justify-between items-center gap-10">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="" id="" />
                            <p className="flex gap-1 items-center font-bold">Select all Item
                                <span className="text-white bg-primary rounded-full 
                                    w-6 h-6 flex items-center justify-center text-sm">2
                                </span>
                            </p>
                        </div>

                        <button className="text-primary text-sm"> x Clear Cart</button>
                    </div>

                    <div className="hidden md:block lg:block">
                        
                        {
                            cartState.length === 0 ? (
                                <div className="flex justify-center items-center gap-2">
                                    <p className="text-center">No item in cart</p>
                                    <Link href="/meals" className="bg-primary text-white p-2 rounded-lg text-sm">
                                        Continue Shopping
                                    </Link>
                                </div>
                            ) : cartState.map((item) => (
                                <div className="my-3">
                                    <div className="md:flex lg:flex items-center justify-center gap-2">
                                    <div className="flex gap-3">
                                        <input
                                            type="checkbox"
                                            id="checkbox"
                                            className=" self-start appearance-none min-w-6 min-h-6 border border-gray-300 
                                            rounded-md checked:bg-primary checked:border-transparent focus:outline-none"
                                        />
                                        <div className="relative bg-black h-44 w-80 rounded-lg overflow-hidden">
                                            <Image src={item.image} alt="food" fill={true} className="object-cover"/>
                                        </div>
                                        
                                        <div className="flex flex-col gap-3 justify-center w-full">
                                            <p className="font-bold">{item.name}</p>
                                            <p className="text-gray-400 text-sm">
                                                1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 
                                                3 medium sized French Fries, 3 cold drinks
                                            </p>

                                            <div className="flex justify-between">
                                                <div className="bg-gray-200 p-1 rounded-full">
                                                    <HeartIcon className="h-4 w-4" />
                                                </div>

                                                <button onClick={() => removeFromCart(item.id)}
                                                className="flex items-center justify-center gap-2 text-primary">
                                                    <XMarkIcon className="h-5 w-5" />
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="min-w-36 flex items-center justify-center gap-2 font-semibold bg-primary text-white p-2 rounded-lg text-sm">
                                        <PlusIcon className="h-5 w-5" />
                                        Add Toppings
                                    </button>

                                    <div className="flex items-center gap-2">
                                        <button className="bg-gray-200 rounded-full p-1">
                                            <MinusIcon className="h-4 w-4" />
                                        </button>
                                        <p className="">{item.qty}</p>
                                        <button className="bg-[#FFF2ED] text-primary rounded-full p-1">
                                            <PlusIcon className="h-4 w-4" />
                                        </button>
                                    </div>

                                    <p className="font-bold text-xl text-right">${item.price}</p>
                                    </div>
                                    <hr className="border my-8" />
                                </div>
                            ))
                        }
                    </div>

                    <div className="block md:hidden lg:hidden">
                        <div className="my-3">
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex gap-3">
                                    <input
                                        type="checkbox"
                                        id="checkbox"
                                        className=" self-start appearance-none min-w-4 min-h-4 border border-gray-300 
                                        rounded-sm checked:bg-primary checked:border-transparent focus:outline-none"
                                    />
                                    <div className="relative bg-black h-36 min-w-32 rounded-lg overflow-hidden">
                                        <Image src="/images/chiefBurger.png" alt="food" fill={true} className="object-cover"/>
                                    </div>
                                    
                                    <div className="flex flex-col gap-3 justify-center w-48">
                                        <p className="font-bold flex justify-between">
                                            Chief Burger Burger
                                            
                                            <div className="bg-gray-200 p-1 rounded-full">
                                                <HeartIcon className="h-4 w-4" />
                                            </div>
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 
                                            3 medium sized French Fries, 3 cold drinks
                                        </p>

                                        <div className="flex justify-between">
                                            <div className="flex items-center gap-2">
                                                <button className="bg-gray-200 rounded-full p-1">
                                                    <MinusIcon className="h-4 w-4" />
                                                </button>
                                                <p className="">1</p>
                                                <button className="bg-[#FFF2ED] text-primary rounded-full p-1">
                                                    <PlusIcon className="h-4 w-4" />
                                                </button>
                                            </div>
                                            <p className="p-3 font-bold text-2xl text-right">$38.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <button className="flex items-center justify-center gap-2 text-primary">
                                    <TrashIcon className="h-5 w-5" />
                                    Remove
                                </button>

                                <button className="min-w-32 flex items-center justify-center gap-2 bg-primary text-white p-2 rounded-lg text-sm">
                                    <PlusIcon className="h-5 w-5" />
                                    Add Toppings
                                </button>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex gap-3">
                                    <input
                                        type="checkbox"
                                        id="checkbox"
                                        className=" self-start appearance-none min-w-4 min-h-4 border border-gray-300 
                                        rounded-sm checked:bg-primary checked:border-transparent focus:outline-none"
                                    />
                                    <div className="relative bg-black h-36 min-w-32 rounded-lg overflow-hidden">
                                        <Image src="/images/chiefBurger.png" alt="food" fill={true} className="object-cover"/>
                                    </div>
                                    
                                    <div className="flex flex-col gap-3 justify-center w-48">
                                        <p className="font-bold flex justify-between">
                                            Chief Burger Burger
                                            
                                            <div className="bg-gray-200 p-1 rounded-full">
                                                <HeartIcon className="h-4 w-4" />
                                            </div>
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 
                                            3 medium sized French Fries, 3 cold drinks
                                        </p>

                                        <div className="flex justify-between">
                                            <div className="flex items-center gap-2">
                                                <button className="bg-gray-200 rounded-full p-1">
                                                    <MinusIcon className="h-4 w-4" />
                                                </button>
                                                <p className="">1</p>
                                                <button className="bg-[#FFF2ED] text-primary rounded-full p-1">
                                                    <PlusIcon className="h-4 w-4" />
                                                </button>
                                            </div>
                                            <p className="p-3 font-bold text-2xl text-right">$38.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <button className="flex items-center justify-center gap-2 text-primary">
                                    <TrashIcon className="h-5 w-5" />
                                    Remove
                                </button>

                                <button className="min-w-32 flex items-center justify-center gap-2 font-semibold bg-primary text-white p-2 rounded-lg text-sm">
                                    <PlusIcon className="h-5 w-5" />
                                    Add Toppings
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 my-5 max-w-96 min-w-72 border p-5 rounded-lg">
                    <h3 className="font-bold border-b-2 pb-5">Cart Summary</h3>

                    <div className="flex flex-col gap-5 py-5 mt-5 text-sm">
                        <div className="flex justify-between gap-3 items-center">
                            <p>Sub Total</p>
                            <p className="font-bold">$89.00</p>
                        </div>

                        <div className="flex justify-between gap-3 items-center">
                            <p>Tax (2%)</p>
                            <p className="">$1.79</p>
                        </div>

                        <div className="flex justify-between gap-3 items-center">
                            <p>Discount (5%)</p>
                            <p className="">$4.47</p>
                        </div>

                        <div className="flex justify-between gap-3 items-center">
                            <p>Dilivery 2%</p>
                            <p className="">$3</p>
                        </div>

                        <hr className="border" />

                        <div className="flex justify-between gap-3 items-center font-bold">
                            <p>Total</p>
                            <p className="font-bold">$89.00</p>
                        </div>
                    </div>

                    <Link href="/checkout" className="bg-primary text-white font-semibold text-center text-sm w-full rounded-lg p-2">
                        Proceed to Checkout
                    </Link>
                    <button className="text-primary bg-[#FFF2ED] text-sm w-full font-semibold rounded-lg p-2">
                        Pair Deliver With Other Users
                    </button>

                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Return Policy</p>
                        <p className="text-sm">
                            Returning an item is very easy, read details 
                            <span className="text-primary"> here</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}