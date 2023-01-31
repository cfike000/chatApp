import React, { useRef, useState } from "react"
import { useEffect } from "react"
import { UseCategory } from "../context/CategoryContext"
import { motion as m } from "framer-motion"

const CategorySlider = () => {
  const { currentCategory, setCurrentCategory } = UseCategory()
  const [barPosition, setBarPosition] = useState(0)
  const moveBar = (ref, id) => {
    setCurrentCategory(id)
    setBarPosition(ref.current.offsetLeft)
  }
  useEffect(() => {}, [barPosition])
  const currentRef = useRef(null)
  const currentRef1 = useRef(null)
  const currentRef2 = useRef(null)
  const currentRef3 = useRef(null)

  const styles = {
    bar: `absolute bottom-[-.25rem]  h-1 w-8 bg-[#5B41FF] rounded-full `,
    link: `cursor-pointer transtition`,
  }

  return (
    <div className="relative flex items-center justify-between pt-8">
      <div
        style={{
          color: currentCategory === 0 ? "blue" : "",
          opacity: currentCategory === 0 ? "" : ".5",
        }}
        className={styles.link}
        ref={currentRef}
        id={0}
        onClick={() => moveBar(currentRef, 0)}
      >
        Handbags
      </div>

      <div
        style={{
          color: currentCategory === 1 ? "blue" : "",
          opacity: currentCategory === 1 ? "" : ".5",
        }}
        className={styles.link}
        ref={currentRef1}
        id={1}
        onClick={() => moveBar(currentRef1, 1)}
      >
        Watches
      </div>
      <div
        style={{
          color: currentCategory === 2 ? "blue" : "",
          opacity: currentCategory === 2 ? "" : ".5",
        }}
        className={styles.link}
        id={2}
        ref={currentRef2}
        onClick={() => moveBar(currentRef2, 2)}
      >
        Shoes
      </div>
      <div
        style={{
          color: currentCategory === 3 ? "blue" : "",
          opacity: currentCategory === 3 ? "" : ".5",
        }}
        className={styles.link}
        ref={currentRef3}
        id={3}
        onClick={() => moveBar(currentRef3, 3)}
      >
        Glasses
      </div>
      <m.div
        className={styles.bar}
        initial={{ x: 0 }}
        animate={{ x: `${barPosition}px` }}
        transition={{ type: "spring", stiffness: 50 }}
      ></m.div>
    </div>
  )
}

export default CategorySlider
