import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { CategoryContextProvider } from "./context/CategoryContext"
import { CartContextProvider } from "./context/CartContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CategoryContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </CategoryContextProvider>
  </React.StrictMode>
)
