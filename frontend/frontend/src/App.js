import Navbar from "./Navbar"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Profile from "./pages/Profile"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
