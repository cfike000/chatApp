import React from "react"
import { purses } from "../data/purses"
import Product from "./Product"
import { motion as m } from "framer-motion"
import { watches } from "../data/watches"
import { glasses } from "../data/glasses"
import { shoes } from "../data/shoes"
import { UseCategory } from "../context/CategoryContext"
import { useRef } from "react"
const ProductViewer = () => {
  // Framer Motion
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  }

  const styles = {
    main: `grid grid-cols-2 place-items-center gap-6 pt-8`,
  }

  const { currentCategory } = UseCategory()

  const arrays = [purses, watches, shoes, glasses]
  return (
    <m.div
      className={styles.main}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {arrays[currentCategory].map(({ name, series, price, url, id }) => (
        <Product
          key={id}
          name={name}
          picUrl={url}
          series={series}
          price={price}
          id={id}
        />
      ))}
    </m.div>
  )
}

export default ProductViewer
