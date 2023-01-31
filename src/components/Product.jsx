import React from "react"
import { UseCategory } from "../context/CategoryContext"
import { motion as m } from "framer-motion"
const Product = ({ id, name, picUrl, series, price }) => {
  const { setOpenShop, setCurrentProduct, currentCategory } = UseCategory()

  const styles = {
    main: ` w-36 bg-white rounded-lg flex flex-col shadow-sm cursor-pointer sm:hover:scale-105 transition ease-i sm:w-48 
  
    `,
  }
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  const expand = () => {
    setOpenShop(true)
    setCurrentProduct(id)
  }

  return (
    <m.div className={styles.main} onClick={expand} variants={item}>
      <img src={picUrl} className="m-2 h-32 sm:h-40 rounded-lg" />
      <div className=" flex flex-col space-between  h-16 w-28 mx-2">
        <div>
          <div className=" text-sm text-[#1B153D]">{name}</div>
          <div className="text-[.5rem] text-[#9095A6]">{series}</div>
        </div>
        <div className="text-[#5B41FF] py-2 text-sm">${price}</div>
      </div>
    </m.div>
  )
}

export default Product
