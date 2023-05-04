import Navbar from "./Navbar"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import { Route, Routes } from "react-router-dom"
import Profile from "./pages/Profile"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
