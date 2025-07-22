import { Badge, Box, Container, IconButton,  Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import React from "react";
import "../../../css/navbar.css";

export function NavbarOthers(props: any) {
    return (
      <div className="background_others"
      style={{ backgroundImage: 'url("/store/3.jpg")' }}>
    <div className="format_others home_navbar" >

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
                onClick={props.setPath}
                 data-text=" Home">
                Home
            </NavLink>
            </Box>

            <Box className="hover_line">
            <NavLink
                to="/store"
               className={({ isActive }) => (isActive ? "nav_item underline" : "nav_item")}
                onClick={props.setPath}
                data-text="Stores">
                Stores
            </NavLink>
            </Box>

            <Box className="hover_line">
            <NavLink
                to="/allproducts"
               className={({ isActive }) => (isActive ? "nav_item underline" : "nav_item")}
                onClick={props.setPath}
                data-text="AllProducts">
                AllProducts
            </NavLink>
            </Box>

            <Box className="hover_line">
            <NavLink
                to="/orders"
                className={({ isActive }) => (isActive ? "nav_item underline" : "nav_item")}
                 onClick={props.setPath}
                data-text="Orders">
                Orders
            </NavLink>
            </Box>

            <Box className="hover_line">
            <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "nav_item underline" : "nav_item")}
                 onClick={props.setPath}
                data-text="Blogs">
                Blogs
            </NavLink>
            </Box>

            <Box className="hover_line">
            <NavLink
                to="/help"
                className={({ isActive }) => (isActive ? "nav_item underline" : "nav_item")}
                 onClick={props.setPath}
                data-text="Help">
                Help
            </NavLink>
            </Box>

            <Box className="hover_line">
            <NavLink
                to="/mypage"
                className={({ isActive }) => (isActive ? "nav_item underline" : "nav_item")}
                 onClick={props.setPath}
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
                 onClick={props.setPath}
                data-text="SignUp">
                SignUp
            </NavLink>
            </Box>

            <Box className="hover_line">
            <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "nav_item underline" : "nav_item")}

                data-text="Login">
                Login
            </NavLink>
            </Box>

          </Stack>
        </Stack>
      </Container>
      </div>
    </div>
    );
}
