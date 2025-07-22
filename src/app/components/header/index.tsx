import { Badge, Box, Button, Container, IconButton, Stack } from "@mui/material";
import React from "react";
import {  NavLink, useLocation } from "react-router-dom";
import "../../../css/navbar.css";


export function NavbarHome({ setPath }: { setPath?: (path: string) => void }) {
  const location = useLocation();
    return (
      <div className="format home_navbar">
      <Container>
        <Stack flexDirection="row"
        className="navbar_config"
        justifyContent={"space-between"}>


          <Box>
             <NavLink to="/">
            <img height="65px"  src="/icons/john.svg" alt="Logo" />
          </NavLink>
          </Box>

          <Stack
             flexDirection="row"
             justifyContent="space-evenly"
             alignItems={"center"}
             className="nav_item">

            <Box className="hover_line">

            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav_item underline" : "nav_item")}
                onClick={() => setPath && setPath("/")}
                 data-text=" Home">
                Home
            </NavLink>
            </Box>

            <Box className="hover_line">
            <NavLink
                to="/store"
               className={({ isActive }) => (isActive ? "nav_item underline" : "nav_item")}
               onClick={() => setPath && setPath("/store")}
                data-text="Stores">
                Stores
            </NavLink>
            </Box>

            <Box className="hover_line">
            <NavLink
                to="/allproducts"
               className={({ isActive }) => (isActive ? "nav_item underline" : "nav_item")}
            onClick={() => setPath && setPath("/allproducts")}
                data-text="AllProducts">
                AllProducts
            </NavLink>
            </Box>

            <Box className="hover_line">
            <NavLink
                to="/orders"
                className={({ isActive }) => (isActive ? "nav_item underline" : "nav_item")}
                onClick={() => setPath && setPath("/orders")}
                data-text="Orders">
                Orders
            </NavLink>
            </Box>

            <Box className="hover_line">
            <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "nav_item underline" : "nav_item")}
                onClick={() => setPath && setPath("/blogs")}
                data-text="Blogs">
                Blogs
            </NavLink>
            </Box>

            <Box className="hover_line">
            <NavLink
                to="/help"
                className={({ isActive }) => (isActive ? "nav_item underline" : "nav_item")}
                onClick={() => setPath && setPath("/help")}
                data-text="Help">
                Help
            </NavLink>
            </Box>

            <Box className="hover_line">
            <NavLink
                to="/mypage"
                className={({ isActive }) => (isActive ? "nav_item underline" : "nav_item")}
                onClick={() => setPath && setPath("/mypage")}
                data-text="MyPage">
                MyPage
            </NavLink>
            </Box>




            <Box className="hover_line">
         <IconButton
          aria-label="Search" onClick={() => console.log("Clicked")}>
            <img src="/icons/search.svg" alt="Search Icon" />
         </IconButton>
 </Box>

            <Box className="hover_line">
         <IconButton
          aria-label="Cart"
            id="basic-button"
           aria-controls={undefined}
           aria-haspopup="true"
           aria-expanded={undefined}>

            <Badge badgeContent={1} color="secondary">
              <img src="/icons/shopify.svg" alt="Cart Icon" />
            </Badge>
         </IconButton>
            </Box>

  <Box className="hover_line">
            <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? "nav_item underline" : "nav_item")}
              onClick={() => setPath && setPath("/signup")}
                data-text="SignUp">
                SignUp
            </NavLink>
            </Box>

            <Box className="hover_line">
            <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "nav_item underline" : "nav_item")}
            onClick={() => setPath && setPath("/login")}
                data-text="Login">
                Login
            </NavLink>
            </Box>




          </Stack>
        </Stack>
      </Container>

    </div>




    );
}




