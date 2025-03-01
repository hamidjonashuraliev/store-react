import React from "react";
import Container from "@mui/material/Container";
import { Badge, Box, Button, IconButton, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function NavbarHome() {
    return (
        <div className="format home_navbar">
            <Container>
                <Stack flexDirection={"row"} className="navbar_config">
                    <Box>
                        <img height={"50px"} src="/icons/john.svg" />
                    </Box>
                    <Stack
                        flexDirection={"row"}
                        paddingLeft={"100px"}
                        paddingRight={"50px"}
                        justifyContent={"space-around"}
                        alignItems={"center"}
                        className="navbar_links"
                    >
                        <Box className="hover_line">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </Box>

                        <Box className="hover_line">
                            <NavLink
                                to="/store"
                                className={({ isActive }) =>
                                    isActive ? "underline" : ""
                                }
                            >
                                Stores
                            </NavLink>
                        </Box>

                        <Box className="hover_line">
                            <NavLink
                                to="/allproducts"
                                className={({ isActive }) =>
                                    isActive ? "underline" : ""
                                }
                            >
                                All Products
                            </NavLink>
                        </Box>

                        <Box className="hover_line">
                            <NavLink
                                to="/orders"
                                className={({ isActive }) =>
                                    isActive ? "underline" : ""
                                }
                            >
                                Orders
                            </NavLink>
                        </Box>

                        <Box className="hover_line">
                            <NavLink
                                to="/blogs"
                                className={({ isActive }) =>
                                    isActive ? "underline" : ""
                                }
                            >
                                Blogs
                            </NavLink>
                        </Box>

                        <Box className="hover_line">
                            <NavLink
                                to="/help"
                                className={({ isActive }) =>
                                    isActive ? "underline" : ""
                                }
                            >
                                Help
                            </NavLink>
                        </Box>

                        <Box className="hover_line">
                            <NavLink
                                to="/mypage"
                                className={({ isActive }) =>
                                    isActive ? "underline" : ""
                                }
                            >
                                My Page
                            </NavLink>
                        </Box>

                        <img src={"/icons/searc.svg "} />

                        <Box className="signup">SIGN UP</Box>
                        <Box>LOG IN</Box>

                        <Badge badgeContent={3} color="secondary">
                            <img src={"/icons/shopify.svg "} />
                        </Badge>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}