import { ChevronRightIcon, XMarkIcon, MinusIcon, PlusIcon } from "@heroicons/react/16/solid"
import { HeartIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import SaveDelicacies from "../ui/cart/saved"

export default function Cart() {
    return (
        <section className="flex flex-col items-center justify-center max-w-screen">
            <div className="bg-[#F6F7F9] p-5 md:p-24 lg:p-24">
                <h1 className="flex gap-3 items-center text-bold">
                    Home 
                    <ChevronRightIcon className="h-4 w-4" />
                     Menu 
                     <ChevronRightIcon className="h-4 w-4" />
                     <span className="text-primary">Cart</span>
                </h1>

                <div className="grid grid-cols-4 gap-10 bg-[#fff] w-full rounded-lg md:p-10 lg:p-10 my-14">
                    <div className=" col-span-3">
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <input type="checkbox" name="" id="" />
                                <p className="flex gap-1 items-center font-bold w-full">Select all Item
                                <span className="text-white bg-primary rounded-full px-1 text-sm">2</span>
                                </p>
                            </div>

                            <button className="text-primary text-sm"> x Clear Cart</button>
                        </div>

                        <div className="grid font-bold grid-cols-5 gap-2 md:grid-cols-7 lg:grid-cols-7 bg-primary text-white rounded-t-lg p-5 mt-7">
                            <p className="p-3 md:col-span-3 lg:col-span-3">Meals</p>
                            <p className="p-3">Customize</p>
                            <p className="p-3">Quantity</p>
                            <p className="p-3">Price</p>
                            <p className="p-3">Sub - Total</p>
                        </div>

                        <div className="grid grid-cols-5 gap-2 md:grid-cols-7 lg:grid-cols-7 bg-transparent p-5 border-b-2">
                            <div className="p-3 md:col-span-3 lg:col-span-3">
                                <div className="flex items-center gap-5 justify-between p-3">
                                    <input
                                        type="checkbox"
                                        id="checkbox"
                                        className=" self-start appearance-none min-w-6 min-h-6 border border-gray-300 
                                        rounded-md checked:bg-primary checked:border-transparent focus:outline-none"
                                    />
                                    <Image src="/images/chiefBurger.png" alt="First Cart item" width={250} height={150} className="rounded-lg" />
                                    
                                    <div className="flex flex-col">
                                        <div>
                                            <p className="font-bold">Chief Burger Burger</p>
                                            <p className="text-gray-400 text-sm">
                                                1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 
                                                3 medium sized French Fries , 3 cold drinks
                                            </p>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <div className="bg-gray-200 p-1 rounded-full">
                                                <HeartIcon className="h-6 w-6" />
                                            </div>

                                            <button className="flex items-center justify-center gap-2 text-primary">
                                                <XMarkIcon className="h-6 w-6" />
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <button className="text-primary bg-[#FFF2ED] py-2 px-5 rounded-lg">Add Toppings</button>
                            </div>
                            <div className="flex items-center  justify-center">
                                <div className="flex gap-5 bg-gray-100 rounded-lg py-2 px-5">
                                    <button><MinusIcon className="h-6 w-6" /></button>
                                    <p className="">1</p>
                                    <button><PlusIcon className="h-6 w-6" /></button>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <p className="p-3">$19.00</p>
                            </div>

                            <div className="flex items-center">
                                <p className="p-3 font-bold">$38.00</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 w-full border p-5 rounded-lg">
                        <h3 className="font-bold border-b-2 pb-5">Cart Summary</h3>

                        <div className="flex flex-col gap-5 py-5 my-5 border-b-2 text-sm">
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
                        </div>

                        <button className="bg-primary text-white text-sm w-full rounded-lg p-2">
                            Proceed to Checkout
                        </button>
                        <button className="text-primary bg-[#FFF2ED] text-sm w-full rounded-lg p-2">
                            Pair Deliver With Other Users
                        </button>

                        <div className="flex flex-col gap-2">
                            <p className="font-bold">Return Policy</p>
                            <p className="text-sm">
                                Returning an item is very easy, read details 
                                <span className="text-primary">here</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:p-24 lg:p-24">
                <SaveDelicacies />
            </div>
        </section>
    )
}