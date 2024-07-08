"use client";

import {useState, useEffect, createContext, useContext} from "react"
import { Cart, Data, Product } from "@/app/lib/definitons"
import { HotDishes, Snacks, Soups,
    MealsMenu, Salads, Drinks, IceCreams, Swallow, Coffees
 } from "@/app/lib/data";
 import { useRouter } from 'next/navigation'



type CartContextType = {
    cart: Array<Cart>;
    cartState: Array<Data>;
    addToCart: (id: number, menu:string) => void;
    removeFromCart: (id: string) => void;
    addReduceProductQuantity: (id: string, action: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
    cart: [],
    cartState: [],
    addToCart: function (id: number, menu: string): void {
        throw new Error("Function not implemented.");
    },
    removeFromCart: function (id: string): void {
        throw new Error("Function not implemented.");
    },
    addReduceProductQuantity: function (id: string, action: string): void {
        throw new Error("Function not implemented.");
    },
    clearCart: function (): void {
        throw new Error("Function not implemented.");
    }
})

export function Provider({ children }: Readonly<{ children: React.ReactNode}>) {

    const [cart, setCart] = useState(Array<Cart>)
    const [ cartState, setCartState ] = useState(Array<Data>)
    const router = useRouter()

    const addToCart = (id:number, menu:string) => {
        // Check if the menu already exists in the cart
        const menuExist = cart.find((item) => item.menu === menu);
    
        if (menuExist) {
            // Menu exists, check if item with the same id exists
            const exist = menuExist.data.find((item) => item.id === id);
    
            if (exist) {
                // Item with the same id exists, update its quantity
                const updatedCart = cart.map((item) => {
                    if (item.menu === menu && item.data.some((itemData) => itemData.id === id)) {
                        return {
                            ...item,
                            data: item.data.map((itemData) =>
                                itemData.id === id ? { ...itemData, qty: itemData.qty + 1 } : itemData
                            ),
                        };
                    } else {
                        return item;
                    }
                });
                setCart(updatedCart);
            } else {
                // Item with the same menu but different id, add new item
                const updatedCart = cart.map((item) =>
                    item.menu === menu ? { ...item, data: [...item.data, { id, qty: 1 }] } : item
                );
                setCart(updatedCart);
            }
        } else {
            // Menu does not exist in the cart, add new menu and item
            setCart([...cart, { menu, data: [{ id, qty: 1 }] }]);
        }
    
        return router.push('/cart')
    };
    

    // find the items in the cart
    function updateStateWithMenuProducts(menu: string, menuType: Cart, products: Product[]) {

        // Check if the cart's menu matches the given menu name
        if (menuType.menu === menu) {
            // Iterate through the cart data
            menuType.data.forEach(cartItem => {
                // Find the product details by id
                const product = products.find(p => p.id === cartItem.id);
                if (product) {
                    // Add the product details with quantity to the state
                    const existingProduct = cartState.find(p => p.name === product.name);

                    if (existingProduct) {
                        // If it exists, update the quantity
                        existingProduct.qty += cartItem.qty;
                    } else {
                        // If it doesn't exist, add it to the state with a random id
                        setCartState([...cartState, {
                            id: generateRandomId(),
                            name: product.name,
                            price: product.price,
                            qty: cartItem.qty,
                            image: product.image,
                            description: product.description
                        }])
                    }
                    
                }
            });
        }
    
        // Log the updated state (for debugging purposes)
        console.log(cartState);
    }

    function generateRandomId(): string {
        return Math.random().toString(36).substr(2, 9);
    }

    const getProduct = (name: string) => {
        switch (name) {
            case "Meals":
                return MealsMenu;
            case "Snack":
                return Snacks;
            case "Soups":
                return Soups;
            case "Salads":
                return Salads;
            case "Drinks":
                return Drinks;
            case "Ice Creams":
                return IceCreams;
            case "Swallow":
                return Swallow;
            case "Coffee & Tea":
                return Coffees;
            default:
                return HotDishes;
        }
    }

    // remove item from the setState variable
    const removeFromCart = (id: string) => {
        setCartState(cartState.filter(item => item.id !== id))
    }

    // clear cart
    const clearCart = () => {
        setCartState([])
    }

    // update product quantity in the setState variable
    const addReduceProductQuantity = (id: string, action: string) => {
        const updatedCart = cartState.map(item => {
            if (item.id === id) {
                if (action === "add" && item.qty < 10) {
                    item.qty += 1
                } else if (action === "sub" && item.qty > 1){
                    item.qty -= 1
                }
            }
            return item
        })
        setCartState(updatedCart)
    }

    useEffect(() => {
        cart.forEach(menuType => {
            const productList = getProduct(menuType.menu);
            updateStateWithMenuProducts(menuType.menu, menuType, productList);
        })
    }, [updateStateWithMenuProducts])

    return (
        <CartContext.Provider 
        value={{ cart, addToCart, cartState, removeFromCart, addReduceProductQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartState() {
    return useContext(CartContext)
}
