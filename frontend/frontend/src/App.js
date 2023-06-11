import Navbar from "./Navbar"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Profile from "./pages/Profile"
import {Navigate, Route, Routes} from "react-router-dom"
import Register from "./pages/OnboardingForm";
import {useAuthentication} from "./providers/AuthProvider";

function App() {

    const {authenticated} = useAuthentication();

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            { // only authorized users have access to the following routes
                authenticated &&
                <>
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/aboutus" element={<AboutUs />} />
                    <Route exact path="/profile" element={<Profile />} />
                </>
            }
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
      </div>
    </>
  )
}

export default App;
