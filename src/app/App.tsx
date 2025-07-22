import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import {  Routes,   useLocation, BrowserRouter, Route, Router, Link } from "react-router-dom";
import "../css/App.css";
import "../css/navbar.css";


import { StorePage } from "./screens/StorePage";
import { AllProductsPage } from "./screens/AllProducts";
import { OrdersPage } from "./screens/OrdersPage";
import { BlogsPage } from "./screens/BlogsPage";
import { HelpPage } from "./screens/HelpPage";
import { MyPage } from "./screens/MyPage";
import { LoginPage } from "./screens/LoginPage";
import { MemberPage } from "./screens/MemberPage";
import { NavbarHome } from "./components/header";
import { NavbarStore, } from "./components/header/store";
import { NavbarOthers } from "./components/header/others";
import  HeroSection  from "./components/header/HeroSection";







function App() {
  const location = useLocation();
    const currentPath = location.pathname;

    return (
<>
            {currentPath == "/" ? (
                <NavbarHome />
            ) : currentPath.includes("/store") ? (
                <NavbarStore />
            ) : (
                <NavbarOthers />
            )}

            {/* <nav>
                <ul>
                    <li>
                        <Link to="/store">Store Page</Link>
                    </li>
                    <li>
                        <Link to="/allproducts">AllProductsPage</Link>
                    </li>
                    <li>
                        <Link to="/blogs">BlogsPage</Link>
                    </li>
                    <li>
                        <Link to="/orders">OrdersPage</Link>
                    </li>
                    <li>
                        <Link to="/member-page">MemberPage</Link>
                    </li>
                    <li>
                        <Link to="/help">HelpPage</Link>
                    </li>
                    <li>
                        <Link to="/login">LoginPage</Link>
                    </li>
                    <li>
                        <Link to="/mypage">MyPage</Link>
                    </li>
                    <li>
                        <Link to="/">HomePage</Link>
                    </li>
                </ul>
            </nav> */}

            <Routes>
                <Route path="/store" element={<StorePage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/allproducts" element={<AllProductsPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/member-page" element={<MemberPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
</>
    );

  };
export default App;



function HomePage() {
  return (
    <div >
      <HeroSection /> {/* HeroSection bu yerda ko'rsatiladi */}
      <h2>Hamidjon qattiq harakat qil!</h2>
      {/* Boshqa kontentlar */}
    </div>
  );
}




