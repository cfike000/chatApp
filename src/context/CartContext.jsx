import { useContext, createContext, useState } from "react"
import { glasses } from "../data/glasses"
import { purses } from "../data/purses"
import { shoes } from "../data/shoes"
import { watches } from "../data/watches"

export const CartContext = createContext()

const allProducts = glasses.concat(purses, shoes, watches)

const getDefaultCart = () => {
  let cart = {}
  for (let i = 0; i < allProducts.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find(
          (product) => product.id === Number(item)
        )
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }

  const checkout = () => {
    setCartItems(getDefaultCart())
  }

  return (
    <CartContext.Provider
      value={{
        getTotalCartAmount,
        checkout,
        updateCartItemCount,
        removeFromCart,
        addToCart,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const UseCart = () => {
  return useContext(CartContext)
}
