import React, { useState, useRef, useEffect } from "react"
import { motion as m } from "framer-motion"
const ShopSlider = () => {
  const [barPosition, setBarPosition] = useState(0)
  const [position, setPosition] = useState(0)
  const currentRef = useRef(null)
  const currentRef1 = useRef(null)
  const textRef = useRef(null)
  const moveBar = (ref, id) => {
    setBarPosition(ref.current.offsetLeft)
    setPosition(id)
  }
  const [cords, setCords] = useState([])
  useEffect(() => {
    setCords([textRef.current.offsetLeft, textRef.current.offsetTop])
  }, [barPosition])

  const styles = {
    link: `cursor-pointer transtition`,
    bar: `absolute bottom-[.3rem]  h-1 w-8 bg-[#5B41FF] rounded-full `,
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])
  return (
    <div className="relative">
      <div className="relative w-36 justify-between p-2 m-4 flex">
        <div
          style={{
            color: position === 0 ? "blue" : "",
            opacity: position === 0 ? "" : ".5",
          }}
          className={styles.link}
          ref={currentRef}
          id={3}
          onClick={() => moveBar(currentRef, 0)}
        >
          Details
        </div>
        <div
          style={{
            color: position === 1 ? "blue" : "",
            opacity: position === 1 ? "" : ".5",
          }}
          className={styles.link}
          ref={currentRef1}
          id={1}
          onClick={() => moveBar(currentRef1, 1)}
        >
          Reviews
        </div>
        <m.div
          className={styles.bar}
          initial={{ x: 0 }}
          animate={{ x: `${barPosition}px` }}
          transition={{ type: "spring", stiffness: 50 }}
        ></m.div>
      </div>

      <m.div
        ref={textRef}
        className="relative p-2 m-2  text-sm text-[#868C98] opacity-80"
        inital={{ opacity: 1 }}
        animate={position !== 0 ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        // onAnimationComplete={handleEnd}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
        quibusdam quas modi aliquam! Modi placeat quaerat eaque labore? Beatae
        quasi similique ducimus voluptatum ex alias fugit et, aspernatur iusto
        asperiores.
      </m.div>
      <m.div
        className="absolute  mx-2 py-2  text-sm text-[#868C98] opacity-80"
        style={{ top: cords[1], left: cords[0] }}
        animate={position !== 0 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        architecto eum nam dolorem explicabo maiores. Mollitia, tempora beatae
        accusantium perferendis sit ipsum blanditiis voluptatum vitae nam
        nostrum eos quisquam ab?
      </m.div>
    </div>
  )
}

export default ShopSlider
