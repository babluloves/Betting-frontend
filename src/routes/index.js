import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuLayout from "../layout/MenuLayout";
import Dashboard from "../pages/Dashboard";
import PredictionPage from "../pages/PredictionPage";
import Result from "../pages/Result";
import Login from "../pages/Login";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import SignupForm from "../pages/Signup";
import ExpertTeamPage from "../pages/ExpertTeamPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MenuLayout/>
        }
      />
      <Route path="home" element={<Dashboard />} />
      <Route path="Prediction" element={<PredictionPage />} />
      <Route path="Result" element={<Result />} />
      <Route path="login" element={<Login />} />
      <Route path="about" element={<AboutPage/>} />
      <Route path="contact" element={<ContactPage/>} />
      <Route path="signup" element={<SignupForm/>} />
      <Route path="ExpertTeam" element={<ExpertTeamPage/>} />
    </Routes>
  );
}
