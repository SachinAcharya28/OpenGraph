import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Explore from "./pages/Explore/Explore"
import Repository from "./pages/Repository/Repository"

function App() {
  return (
    <>
        <h1 className="text-red-500">App</h1>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/repository/:owner/:repo" element={<Repository/>}/>
        </Routes>
    </>
  )
}

export default App
