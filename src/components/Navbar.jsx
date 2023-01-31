import React, { useEffect } from "react"
import MenuIcon from "../imgs/menu.svg"
import SearchIcon from "../imgs/search.svg"
import { AiOutlineShopping } from "react-icons/ai"
import { motion as m } from "framer-motion"
import { UseCart } from "../context/CartContext"
import { UseCategory } from "../context/CategoryContext"
import Payment from "./Payment"
import Cart from "./Cart"
const Navbar = () => {
  const { openCart, setOpenCart } = UseCategory()

  const { cartItems } = UseCart()
  const itemsInCart = () => {
    let total = 0
    for (const item in cartItems) {
      if (cartItems[item] !== 0) {
        total = total + cartItems[item]
      }
    }
    return total
  }
  const open = () => {
    setOpenCart(true)
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])
  return (
    <div className="flex items-center justify-between h-12 w-full ">
      <img src={MenuIcon} className="h-6 w-6 cursor-pointer" />
      <div className="mx-6 flex items-center w-52   h-12 border-2 rounded-full basis-3/5">
        <img
          src={SearchIcon}
          className="ml-2 basis-8 h-6 w-6 cursor-pointer "
        />
        <input className="mx-4 w-24 mr-4  outline-none outline-0 bg-[rgb(252,252,255)]"></input>
      </div>
      <m.div className="relative cursor-pointer" onClick={open}>
        <AiOutlineShopping className="h-12 w-12 " />
        <m.div
          initial={{ scale: 0 }}
          animate={itemsInCart() > 0 ? { scale: 1 } : { scale: 0 }}
          className="absolute h-6 w-6 bg-red-600 text-white rounded-full flex items-center justify-center right-[.12rem] top-[1.75rem] text-xs pb-[.12rem] "
        >
          {itemsInCart()}
        </m.div>
      </m.div>
      <Cart />

      <Payment />
    </div>
  )
}

export default Navbar
