'use client';

import { useState } from "react";
import { Logo } from "./Logo"
import Link from "next/link"
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ChevronDownIcon, Bars3BottomRightIcon, XMarkIcon, ChevronRightIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { ShoppingBagIcon, UsersIcon, UserIcon, ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/outline";


const links = {
    home: {
        href: "/",
        label: "Home"
    },
    about: {
        href: "#",
        label: "About"
    },
    meals: {
        href: "/meals",
        label: "Products"
    },
    offers: {
        href: "#",
        label: "Offers"
    },
    contact: {
        href: "#",
        label: "Contact"
    }

}

export default function NavBar(){
    const pathname = usePathname()
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen(!navOpen);

    const [isLogin, setIsLogin] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative">
            <nav className="">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-24">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/">
                                    <Logo />
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center justify-between gap-5">
                            <div className="ml-4 flex gap-10 items-center space-x-4">
                                <Link href="/" className={clsx("text-[#616161]"
                                    ,{
                                        "text-primary": pathname === links.home.href
                                    }
                                    )}>Home
                                </Link>
                                {/* <Link href="#" className={clsx("text-[#616161]"
                                        ,{
                                            "text-primary": pathname === links.about.href
                                        }
                                        )}
                                    >About
                                </Link> */}
                                <Link href="/meals" className={clsx("text-[#616161] flex justify-center items-center gap-2"
                                    ,{
                                        "text-primary": pathname === links.meals.href
                                    }
                                    )}
                                    >Meals
                                    <ChevronDownIcon className="w-4 h-4" />
                                </Link>
                                {/* <Link href="#" className={clsx("text-[#616161] flex justify-center items-center gap-2"
                                    ,{
                                        "text-primary": pathname === links.offers.href
                                    }
                                    )}
                                    >Offers
                                    <ChevronDownIcon className="w-4 h-4" />
                                </Link> */}
                                {/* <Link href="#" className={clsx("text-[#616161]"
                                        ,{
                                            "text-primary": pathname === links.contact.href
                                        }
                                        )}
                                    >
                                    Contact
                                </Link> */}
                            </div>
                        </div>
                        {isLogin ? (
                            <div className="relative flex gap-6">
                                <Link href="/cart" className="text-[#616161] hidden md:flex items-center justify-center bg-[#F6F6F6] rounded-full w-12 h-12">
                                    <ShoppingCartIcon className="w-6 h-6" />
                                </Link>
                                
                                <button className="text-[#616161] hidden md:flex items-center justify-center bg-[#F6F6F6] rounded-full w-12 h-12">
                                    <HeartIcon className="w-6 h-6" />
                                </button>                                
                                <button onClick={() => setMenuOpen(!menuOpen)}
                                    className="text-[#616161] hidden md:flex justify-center items-center gap-2">
                                    <div className="bg-black rounded-full w-12 h-12"></div>
                                    <ChevronDownIcon className="w-4 h-4" />
                                </button>

                                {menuOpen && (
                                    <div className="absolute bg-white p-5 w-56 top-14 z-10 right-0">
                                        <button onClick={() => setIsLogin(false)}
                                            className="flex justify-center items-center gap-3 bg-primary text-white rounded-lg p-4 w-auto h-12">
                                            Logout
                                            <ArrowRightIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}   

                            </div>
                        ) : (
                            <div className="flex gap-4">
                                {/* <button
                                    className="hidden md:flex justify-center items-center gap-3 bg-[#FFF7F5] text-primary rounded-lg p-4 w-auto h-12">
                                    Sign up
                                    <ArrowRightIcon className="w-4 h-4" />
                                </button> */}
                                <Link href="/cart" className="text-[#616161] hidden md:flex items-center justify-center bg-[#F6F6F6] rounded-full w-12 h-12">
                                    <ShoppingCartIcon className="w-6 h-6" />
                                </Link>
                                <button onClick={() => setIsLogin(true)}
                                    className="hidden md:flex justify-center items-center gap-3 bg-primary text-white rounded-lg p-4 w-auto h-12">
                                    Login
                                    <ArrowRightIcon className="w-4 h-4" />
                                </button>
                            </div>
                        )}               
                        <div className="md:hidden flex items-center">
                            <Link href="/cart" className="text-[#616161] flex items-center justify-center bg-[#F6F6F6] rounded-full w-10 h-10">
                                <ShoppingCartIcon className="w-4 h-4" />
                            </Link>
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-black md:text-black
                                focus:outline-none focus:ring-0 focus:ring-inset focus:ring-black"
                                onClick={toggleNav}
                                >
                                    {navOpen ? (
                                        <XMarkIcon className="absolute z-30 right-5 h-6 w-6" />
                                    ) : (
                                        isLogin ? (
                                            <div className="">
                                                <button className="text-[#616161] flex justify-center items-center gap-2">
                                                    <div className="bg-black rounded-full w-12 h-12"></div>
                                                    <ChevronDownIcon className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ) : (
                                            <Bars3BottomRightIcon className="h-6 w-6" />
                                        )
                                    )}
                            </button>
                        </div>
                    </div>
                </div>
                {navOpen && (
                    <div className="bg-white w-[80%] md:hidden absolute z-20 top-0 right-0 p-3">
                        {isLogin && (
                            <div className="flex items-center gap-3 mx-2 my-4 -mb-5">
                                <div className="bg-black rounded-full w-10 h-10"></div>
                                <h1 className="font-bold text-lg">Ibrahim Michael</h1>
                            </div>
                        )}
                        <div className="grid gap-5 px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="/" className={clsx("mt-8 flex justify-between text-[#616161]"
                                ,{
                                    "text-primary": pathname === links.home.href
                                }
                                )}>
                                <div className="flex gap-2">
                                    <ShoppingBagIcon className="h-6 w-6" />
                                    Home
                                </div>
                                <ChevronRightIcon className="w-4 h-4" />
                            </Link>
                            {/* <Link href="#" className={`flex justify-between 
                                ${pathname === '/about'? 'text-primary' : 'text-[#616161]'}`
                                }>
                                <div className="flex gap-2">
                                    <UsersIcon className="h-6 w-6" />
                                    About
                                </div>
                                <ChevronRightIcon className="w-4 h-4" />
                            </Link> */}
                            <Link href="/meals" className={`flex justify-between 
                                ${pathname === '/meals'? 'text-primary' : 'text-[#616161]'}`
                                }>
                                <div className="flex gap-2">
                                    <UsersIcon className="h-6 w-6" />
                                    Meal
                                </div>
                                <ChevronRightIcon className="w-4 h-4" />
                            </Link>
                            {/* <Link href="#" className={`flex justify-between 
                                ${pathname === '/offers'? 'text-primary' : 'text-[#616161]'}`
                                }>
                                <div className="flex gap-2">
                                    <UsersIcon className="h-6 w-6" />
                                    Offers
                                </div>
                                <ChevronRightIcon className="w-4 h-4" />
                            </Link> */}
                            {/* <Link href="#" className={`flex justify-between 
                                ${pathname === '/contact'? 'text-primary' : 'text-[#616161]'}`
                                }>
                                <div className="flex gap-2">
                                    <UsersIcon className="h-6 w-6" />
                                    Contact
                                </div>
                                <ChevronRightIcon className="w-4 h-4" />
                            </Link> */}

                            {isLogin ? (
                                <>
                                    {/* <Link href="/cart" className={`flex justify-between 
                                        ${pathname === '/order'? 'text-primary' : 'text-[#616161]'}`
                                        }>
                                        <div className="flex gap-2">
                                            <ShoppingCartIcon className="h-6 w-6" />
                                            Order
                                        </div>
                                        <ChevronRightIcon className="w-4 h-4" />
                                    </Link> */}
                                    {/* <Link href="#" className={`flex justify-between 
                                        ${pathname === '/account'? 'text-primary' : 'text-[#616161]'}`
                                        }>
                                        <div className="flex gap-2">
                                            <UserIcon className="h-6 w-6" />
                                            Acount
                                        </div>
                                        <ChevronRightIcon className="w-4 h-4" />
                                    </Link> */}
                                    {/* <Link href="#" className={`flex justify-between 
                                        ${pathname === '/saved'? 'text-primary' : 'text-[#616161]'}`
                                        }>
                                        <div className="flex gap-2">
                                            <HeartIcon className="h-6 w-6" />
                                            Saved Items
                                        </div>
                                        <ChevronRightIcon className="w-4 h-4" />
                                    </Link> */}
                                    <button onClick={() => setIsLogin(false)}
                                        className="flex justify-center items-center gap-3 bg-primary text-white rounded-lg p-2 w-auto h-12">
                                            Logout
                                            <ArrowRightIcon className="w-4 h-4" />
                                    </button>
                                </>
                                
                            ): (
                                <button onClick={() => setIsLogin(true)}
                                    className="flex justify-center items-center gap-3 bg-primary text-white rounded-lg p-2 w-auto h-12">
                                    Login
                                    <ArrowRightIcon className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>
                )
                }
            </nav>
        </div>
    )
}