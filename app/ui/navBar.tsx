'use client';

import { Logo } from "./Logo"
import Link from "next/link"
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/16/solid";


const links = {
    home: {
        href: "/",
        label: "Home"
    },
    about: {
        href: "#",
        label: "About"
    },
    products: {
        href: "#",
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

    return (
        <div className="flex justify-between items-center px-4 py-4 md:px-28">
            <Logo />
            <nav>
                <ul className="hidden md:flex space-x-10">
                    <li>
                        <Link href="/" className={clsx("text-[#616161]"
                        ,{
                            "text-primary": pathname === links.home.href
                        }
                        )}>Home</Link>
                    </li>
                    <li>
                        <Link href="#" className={clsx("text-[#616161]"
                            ,{
                                "text-primary": pathname === links.about.href
                            }
                            )}
                        >About</Link>
                    </li>
                    <li>
                        <Link href="#" className={clsx("text-[#616161] flex justify-center items-center gap-2"
                            ,{
                                "text-primary": pathname === links.products.href
                            }
                            )}
                        >Products
                        <ChevronDownIcon className="w-4 h-4" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className={clsx("text-[#616161] flex justify-center items-center gap-2"
                            ,{
                                "text-primary": pathname === links.offers.href
                            }
                            )}
                        >Offers
                        <ChevronDownIcon className="w-4 h-4" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className={clsx("text-[#616161]"
                            ,{
                                "text-primary": pathname === links.contact.href
                            }
                            )}
                        >Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="">
                <button className="bg-[#FFF7F5] text-primary px-4 py-2 rounded-lg">Sign Up</button>
                <button className="bg-primary text-white px-4 py-2 rounded-lg">Login</button>
            </div>
        </div>
    )
}