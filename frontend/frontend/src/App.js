import Navbar from "./Navbar"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Profile from "./pages/Profile"
import {Navigate, Route, Routes} from "react-router-dom"
import Register from "./pages/OnboardingForm";
import {useAuthentication} from "./providers/AuthProvider";
import Meals from "./pages/Meals"
import SalmonGreenBeans from "./meals/SalmonGreenBeans"
import BroccoliSteaks from "./meals/BroccoliStakes"
import AirSquah from "./meals/AirSquash"
import FishAndVeggies from "./meals/FishAndVeggies"
import ShrimpLettuceWraps from "./meals/ShrimpLettuceWraps"
import BeanKaleToast from "./meals/BeanKaleToast"
import GaramMasalaChicken from "./meals/GaramMasalaChicken"
import CaliflowerTacos from "./meals/CaliflowerTacos"
import MarinatedFlankStake from "./meals/MarinatedFlankStake"
import ProkWithButternutSquash from "./meals/PorkWithButternutSquash"
import SheetPanChickenFajitas from "./meals/SheetPanChickenFajitas"
import ShrimpCeviche from "./meals/ShrimpCeviche"
import CaliFlowerSoup from "./meals/CaliFlowerSoup"
import CaliforniaRollSalad from "./meals/CaliforniaRollSalad"
import Shakshuka from "./meals/Shakshuka"

import React, { useState } from 'react';

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
                    <Route exact path="/meals" element={<Meals />} />
                    <Route exact path="/aboutus" element={<AboutUs />} />
                    <Route exact path="/profile" element={<Profile />} />

                    <Route exact path="/salmongreenbeans" element={<SalmonGreenBeans />} />
                    <Route exact path="/broccolisteak" element={<BroccoliSteaks />} />
                    <Route exact path="/airsquash" element={<AirSquah />} />
                    <Route exact path="/fishandveggies" element={<FishAndVeggies />} />
                    <Route exact path="/shrimplettucewraps" element={<ShrimpLettuceWraps />} />
                    <Route exact path="/beanandkaletoast" element={<BeanKaleToast />} />
                    <Route exact path="/garammasalachicken" element={<GaramMasalaChicken />} />
                    <Route exact path="/califlowertacos" element={<CaliflowerTacos />} />
                    <Route exact path="/flankstake" element={<MarinatedFlankStake />} />
                    <Route exact path="/porkwithbutternutsquash" element={<ProkWithButternutSquash />} />
                    <Route exact path="/chickenfajitas" element={<SheetPanChickenFajitas />} />
                    <Route exact path="/shrimpceviche" element={<ShrimpCeviche />} />
                    <Route exact path="/califlowersoup" element={<CaliFlowerSoup />} />
                    <Route exact path="/californiarollsalad" element={<CaliforniaRollSalad />} />
                    <Route exact path="/shakshuka" element={<Shakshuka />} />
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
