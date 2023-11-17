import { useState } from "react"
import Newsboard from "./Components/Newsboard"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

const App = () => {
  const [category,setCategory]= useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
      <Footer/>
    
    </div>
  )
}

export default App