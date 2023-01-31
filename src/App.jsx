import "./App.css"
import CategorySlider from "./components/CategorySlider"
import Navbar from "./components/Navbar"
import { motion as m } from "framer-motion"
import ProductViewer from "./components/ProductViewer"
import SlideShop from "./components/SlideShop"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { UseCategory } from "./context/CategoryContext"
function App() {
  const { openCart } = UseCategory()

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="sm:flex sm:items-center sm:justify-center sm:h-[100vh]  ">
              <m.div className="relative py-6 px-6 overflow-hidden sm:border sm:border-gray-300 sm:rounded-lg   ">
                <Navbar />
                {/* Header */}
                <m.div
                  initial={{ y: "10px" }}
                  animate={{ y: "0" }}
                  className="text-4xl pt-8 text-[#1B153D] font-bold"
                >
                  Find your dream product now.
                </m.div>
                {/* Category Slider */}
                <CategorySlider />
                {/* Category Slider */}
                {/* Image Viewer */}
                <ProductViewer />
                {/* Image Viewer */}
                <SlideShop />
              </m.div>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  )
}

export default App
