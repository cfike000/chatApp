import React, { useEffect, useState, useRef } from "react"
import { motion as m, AnimatePresence } from "framer-motion"
import { UseCategory } from "../context/CategoryContext"
import { purses } from "../data/purses"
import { Swipeable } from "react-swipeable"
import ShopSlider from "./ShopSlider"
import { watches } from "../data/watches"
import { shoes } from "../data/shoes"
import { glasses } from "../data/glasses"
import { BsFillCheckCircleFill } from "react-icons/bs"
import { UseCart } from "../context/CartContext"
import { AiOutlineClose } from "react-icons/ai"
const SlideShop = () => {
  const [current, setCurrent] = useState("")

  //added animation

  const [added, setAdded] = useState(false)
  const buy = () => {
    setAdded(true)
    addToCart(id)
  }
  const { addToCart } = UseCart()

  //added animation
  const styles = {
    main: `absolute top-0 left-0 rounded-t-2xl h-full w-full   bg-[rgb(252,252,255)] flex flex-col items-center overflow-hidden`,
    img: `w-42 `,
    bottom: `h-96 w-full rounded-t-lg bg-white`,
    button: `relative h-16 w-full mx-4 rounded-lg  flex items-center justify-center font-bold transition ease-in-out text-white bg-gradient-to-t cursor-pointer hover:opacity-95 
    ${added ? "from-lime-500 to-lime-300" : "from-[#4136F1] to-[#8743FF]"}
    `,
  }
  const { openShop, setOpenShop, currentProduct } = UseCategory()
  const handleSwipe = ({ dir }) => {
    if (dir === "Down") {
      setOpenShop(false)
      setTimeout(function () {
        setAdded(false)
      }, 1000)
    }
  }

  const productSet = purses.concat(watches, shoes, glasses)
  useEffect(() => {
    productSet.forEach((x, i) => {
      if (currentProduct === x.id) {
        setCurrent(x)
      }
    })
  })
  const { name, series, price, url, id } = current
  const closeShop = () => {
    setOpenShop(false)
  }
  return (
    <AnimatePresence>
      {openShop ? (
        <Swipeable onSwiped={handleSwipe} delta={60}>
          <m.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{
              duration: ".750",
            }}
            className={styles.main}
          >
            <div className="rounded-lg overflow-hidden m-4 shadow-lg">
              <img src={url} className={styles.img} />
            </div>
            <AiOutlineClose
              className="sm:h-12 sm:w-12 sm:fill-gray-600 sm:absolute sm:right-8 sm:top-8 invisible sm:visible cursor-pointer  transition hover:fill-red-400"
              onClick={closeShop}
            />
            <div className={styles.bottom}>
              <div className="flex justify-between  p-2 m-4 ">
                <div className="flex flex-col">
                  <div className="text-xl">{name}</div>
                  <div className="text-sm text-[#9095A6]">{series}</div>
                </div>
                <div className="p-2 text-[#5B41FF] text-2xl">${price}</div>
              </div>

              <ShopSlider />
              <div className="h-16 w-full overflow-hidden  flex items-center justify-center my-4">
                <div onClick={buy} className={styles.button}>
                  <m.span
                    initial={{ y: 0 }}
                    animate={added ? { y: "-200%" } : { y: 0 }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    Add to cart
                  </m.span>
                  <m.span
                    initial={{ y: 0 }}
                    animate={added ? { y: "-4.5rem" } : { y: "0" }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="absolute  top-[5rem] font-bold text-[#5B41FF]"
                  >
                    <BsFillCheckCircleFill className="fill-white h-12 w-12" />
                  </m.span>
                </div>
              </div>
            </div>
          </m.div>
        </Swipeable>
      ) : null}
    </AnimatePresence>
  )
}

export default SlideShop
