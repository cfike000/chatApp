import React, { useState } from "react"
import { purses } from "../data/purses"
import { watches } from "../data/watches"
import { shoes } from "../data/shoes"
import { glasses } from "../data/glasses"
import { UseCart } from "../context/CartContext"
const CartItem = ({ id, num }) => {
  const all = purses.concat(watches, shoes, glasses)
  const { cartItems } = UseCart()
  const currentItem = all.filter((x) => {
    if (x.id === id) {
      return x
    }
  })

  const [total, setTotal] = useState(0)

  for (const item in cartItems) {
    if (cartItems[item] !== 0) {
    }
  }
  const { name, series, price, url } = currentItem[0]
  const totalPrice = price * num
  return (
    <div className="px-2 py-2 flex border-b">
      <img
        src={url}
        alt=""
        className="border-1 rounded-lg h-24 w-28  ml-2 my-2"
      />
      <div className="flex flex-col py-2 px-2 justify-between w-full">
        <div className="flex justify-between space-x-6">
          <div className="">
            <div className="font-bold w-4">{name}</div>
            <div className="opacity-50 text-sm">{series}</div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-xs opacity-80">{num} in cart</div>
            <div className="">${totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
