import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Explore from "./pages/Explore/Explore"
import Repository from "./pages/Repository/Repository"

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/repository/:owner/:name" element={<Repository/>}/>
        </Routes>
    </>
  )
}

export default App
