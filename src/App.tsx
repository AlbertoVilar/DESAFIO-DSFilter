import { useState } from "react";
import HeaderClient from "./components/HeaderClient"
import ListingBody from "./components/ListingBody"
import { ContextProductCount } from "./utils/contex-products"



function App() {
  const [contextProductCount, setContextProductCount] = useState<number>(0);
  
  return (
    <>
    <ContextProductCount.Provider value={{ contextProductCount, setContextProductCount }}>
        <HeaderClient />
        <ListingBody />
      </ContextProductCount.Provider>
    </>
  )
}

export default App
