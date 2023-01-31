import { useContext, createContext, useState } from "react"

export const CategoryContext = createContext()

export const CategoryContextProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState(0)
  const [openShop, setOpenShop] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const [openPayment, setOpenPayment] = useState(false)
  const [currentProduct, setCurrentProduct] = useState(false)
  return (
    <CategoryContext.Provider
      value={{
        currentCategory,
        setCurrentCategory,
        openShop,
        setOpenShop,
        currentProduct,
        setCurrentProduct,
        setOpenCart,
        openCart,
        openPayment,
        setOpenPayment,
      }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export const UseCategory = () => {
  return useContext(CategoryContext)
}
