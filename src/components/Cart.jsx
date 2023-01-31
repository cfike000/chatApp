import React, { useRef } from "react"
import { UseCategory } from "../context/CategoryContext"
import { motion as m } from "framer-motion"
import CartItem from "./CartItem"
import Payment from "./Payment"
import { UseCart } from "../context/CartContext"
import { AiFillInfoCircle } from "react-icons/ai"
import { IoReturnUpBackOutline } from "react-icons/io5"
import FedEx from "../imgs/fed.png"
import DHL from "../imgs/dhl.jpeg"
const Cart = () => {
  const { cartItems, getTotalCartAmount } = UseCart()
  const { openCart, setOpenCart, setOpenPayment, openPayment } = UseCategory()
  const close = () => {
    setOpenCart(false)
  }
  const Items = Object.keys(cartItems).map((key) => cartItems[key])
  const total = getTotalCartAmount()
  const styles = {
    button: `relative h-16 w-full rounded-lg  flex items-center justify-center font-bold transition ease-in-out text-white cursor-pointer  bg-[#1B153D] mt-12 hover:opacity-90
    `,
  }

  const radioButtonRef = useRef(null)

  function handleBoxClick1() {
    radioButtonRef.current.checked = true
  }
  const radioButtonRef2 = useRef(null)

  function handleBoxClick2() {
    radioButtonRef2.current.checked = true
  }
  const handleOpen = () => {
    setOpenPayment(true)
  }
  console.log(openPayment)
  return (
    <m.div
      initial={{ x: "100%" }}
      animate={openCart ? { x: "0" } : { x: "100%" }}
      className="absolute top-0 left-0 glass p-6 w-full h-full z-20 rounded-l-lg bg-[rgb(252,252,255)] overflow-auto"
      transition={{
        duration: ".750",
      }}
    >
      {/* Top */}
      <div className="h-16 w-full border-b flex justify-between items-center font-bold mx-2 text-[#1B153D] ">
        Order overview
        <IoReturnUpBackOutline
          className="mr-6 h-8 w-8 cursor-pointer fill-[#1B153D]"
          onClick={close}
        />
      </div>
      {/* Top */}
      {/* Middle */}
      <div className="h-12 text-sm text-[#1B153D] opacity-50 mx-2 py-2">
        Check your items and select your shipping preferences.
      </div>
      <div className=" w-full border rounded-lg bg-white my-8">
        {Items.map((x, i) => {
          if (x !== 0) {
            return <CartItem key={i} id={i} num={x} />
          }
        })}
      </div>
      {/* Middle */}
      {/* Addition */}
      <div className="w-full  h-6 text-2xl flex items-center text-[#5B41FF] justify-end pr-4 pb-2 mt-4 ">
        {total !== 0 ? `$${total}` : "No items in cart"}
      </div>
      {/* Addition */}
      {/* SHipping */}

      <div className=" w-full text-xs font-bold mt-6  h-4 flex items-center ">
        Available Shipping Method
        <AiFillInfoCircle className="ml-2 h-4 w-4 fill-[#1B153D] opacity-70" />
      </div>

      <div
        className=" w-full h-20 rounded-lg  bg-gray-100 mt-2 flex items-center justify-between"
        onClick={handleBoxClick1}
      >
        <div className="flex items-center">
          <img
            src={FedEx}
            className="h-12 w-20  p-2 bg-white rounded-lg ml-4"
          />
          <div className="flex flex-col ml-2">
            <div className="text-xs">FedEx Delivery</div>
            <div className="text-xs opacity-50">2-3 business days</div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="text-xs pr-2 pb-[.10rem]">Free</div>
          <input
            type="radio"
            className=" fill-black color-black bg-black mr-6"
            ref={radioButtonRef}
          ></input>
        </div>
      </div>
      <div className=" w-full text-xs font-bold h-4 flex items-center opacity-50 mt-6">
        Available International Shipping
      </div>
      <div
        onClick={handleBoxClick2}
        className=" w-full h-20 rounded-lg  bg-gray-100 mt-2 flex items-center justify-between"
      >
        <div className="flex items-center">
          <img src={DHL} className="h-12 w-20 bg-white rounded-lg ml-4" />
          <div className=" ml-2 flex flex-col">
            <div className="text-xs">DHL Delivery</div>
            <div className="text-xs opacity-50">4-5 business days</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-xs pr-2 pb-[.10rem]">$12.00</div>
          <input
            type="radio"
            className=" fill-black color-black bg-black mr-6"
            ref={radioButtonRef2}
          ></input>
        </div>
      </div>

      {/* SHipping */}
      <div className={styles.button} onClick={handleOpen}>
        <m.span>Payment Options</m.span>
      </div>
    </m.div>
  )
}

export default Cart
