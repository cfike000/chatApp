import React from "react"
import { motion as m } from "framer-motion"
import { IoReturnUpBackOutline } from "react-icons/io5"
import { UseCategory } from "../context/CategoryContext"
import { BsCreditCard2FrontFill, BsFillPersonFill } from "react-icons/bs"
import America from "../imgs/america.png"
import { UseCart } from "../context/CartContext"
const Payment = () => {
  const { openCart, setOpenCart, setOpenPayment, openPayment } = UseCategory()
  const close = () => {
    setOpenPayment(false)
  }

  const { getTotalCartAmount } = UseCart()
  const total = getTotalCartAmount()
  const tax = getTotalCartAmount() * 0.12
  return (
    <m.div
      initial={{ x: "200%" }}
      animate={openPayment ? { x: "00" } : { x: "100%" }}
      className="absolute top-0 left-0 glass p-6 w-full h-full z-20 rounded-l-lg bg-[rgb(249,249,252)] overflow-auto"
      transition={{
        duration: ".750",
      }}
    >
      <div className="h-16 w-full border-b flex justify-between items-center  mx-2 text-[#1B153D] ">
        Payment Details
        <IoReturnUpBackOutline
          className="mr-6 h-8 w-8 cursor-pointer fill-[#1B153D]"
          onClick={close}
        />
      </div>
      {/* Top */}
      {/* Middle */}
      <div className="h-12 text-sm text-[#1B153D] opacity-50 mx-2 py-2">
        Complete your order by providing your payment details.
      </div>
      {/* Email */}
      <div className="text-xs font-bold ml-2 mt-6 pb-2">Email Address</div>
      <div className="w-full h-12 bg-white rounded-lg flex items-center justify-start border">
        <span className="text-lg pl-4 text-gray-400">@</span>
        <input
          className="mx-4 w-24 mr-4  outline-none outline-0 bg-white"
          type="email"
        ></input>
      </div>
      {/* Email */}
      {/* Email */}
      <div className="text-xs ml-2 font-bold  mt-6 pb-2">Card Details</div>
      <div className="w-full h-12 bg-white rounded-lg flex items-center justify-between px-4 border">
        <span className="text-lg">
          <BsCreditCard2FrontFill className="fill-gray-400" />
        </span>
        <input
          className=" w-24 mr-0 outline-none outline-0 bg-white"
          type="text"
        ></input>
        <div className="flex">
          <input
            placeholder="MM / YY"
            type="text "
            className="outline-none outline-0 bg-white w-16 placeholder:text-xs "
          />
          <input
            placeholder="CVC"
            type="text"
            className="outline-none mr-2 outline-0 bg-white placeholder:text-xs text-center indent-4 border-l pr-2 w-12"
          />
        </div>
      </div>
      {/* Email */}
      {/* Card Holder */}
      <div className="text-xs ml-2  font-bold  mt-6 pb-2">Card Holder</div>
      <div className="w-full h-12 bg-white rounded-lg flex items-center justify-start px-4 border">
        <span className="text-lg">
          <BsFillPersonFill className="fill-gray-400" />
        </span>
        <input
          className=" w-24 ml-4 outline-none outline-0 bg-white"
          type="text"
        ></input>
      </div>
      {/* SHipping Address */}
      <div className="text-xs ml-2  font-bold mt-6 pb-2">Billing Address</div>
      <div className="w-full h-28 bg-white rounded-lg  px-4 border flex flex-col justify-around">
        <div className="flex items-center h-12 justify-start border-b">
          <span className="text-lg">
            <div className="w-8 border-r">
              <img src={America} className="h-6 w-6 " />
            </div>
          </span>
          <input
            className=" w-32 ml-4 outline-none outline-0 bg-white"
            type="text"
          ></input>
        </div>
        <div className="flex items-center justify-between h-12 ">
          <input
            placeholder="State/Region"
            className="border-r w-1/2  outline-none outline-0 bg-white h-full placeholder: text-xs"
            type="text"
          ></input>
          <input
            placeholder="Zip Code"
            className=" w-24 mr-4 h-full outline-none outline-0 bg-white placeholder: text-xs"
            type="text"
          ></input>
        </div>
      </div>
      {/* SHipping Address */}
      <div className="flex items-center justify-between w-full ml-2  pb-2 mt-6 text-xs ">
        <div className="text-xs pr-10 ">Subtotal</div>
        <div className=" pr-4">${total}</div>
      </div>
      <div className="flex items-center justify-between w-full ml-2  pb-2 mt-1 text-xs ">
        <div className="text-xs pr-10 ">Tax</div>
        <div className=" pr-4">${tax}</div>
      </div>
      <div className="flex items-center justify-between w-full ml-2  pb-2 mt-1 text-xs ">
        <div className="pr-10 text-lg font-bold ">Total</div>
        <div className=" pr-4 font-bold text-lg">${tax + total}</div>
      </div>
      <div
        className="relative h-16 w-full rounded-lg  flex items-center justify-center font-bold transition ease-in-out text-white cursor-pointer  bg-[#1B153D] my-6
       hover:opacity-90"
      >
        <m.span>
          {tax + total !== 0 ? `Pay $${tax + total}` : "No items"}
        </m.span>
      </div>
    </m.div>
  )
}

export default Payment
