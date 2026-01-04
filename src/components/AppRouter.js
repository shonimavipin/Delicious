import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayouts";
import HomePage from "../components/HomePage";
import Aboutus from "../components/Aboutus";
import Contactus from "../components/Contactus";
import ContactUsPage from "../components/ContactUsPage";
import BreakFastMenu from "../components/BreakFastMenu";
import Lunch from "../components/Lunch";
import Dinner from "../components/DinnerMenu";
import DessertMenu from "./DessertMenu";
import RecipesPage from "./RecipesPage";
import TeamService from "../components/TeamService";

// import AboutPage from "../pages/AboutPage";
// import ContactPage from "../pages/ContactPag
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="contactuspage" element={<ContactUsPage />} />
        <Route path="contactuspage" element={<ContactUsPage />} />
        <Route path="breakfastmenu" element={<BreakFastMenu />} />
        <Route path="Lunch" element={<Lunch />} />
        <Route path="Dinner" element={<Dinner />} />
        <Route path="Dessertmenu" element={<DessertMenu />} />
        <Route path="RecipePage" element={<RecipesPage />} />
        <Route path="TeamService" element={<TeamService />} />
        
      </Route>
    </Routes>
  );
}
