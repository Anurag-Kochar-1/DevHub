import React from "react";
import { Stack, Avatar, Typography, Hidden } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    s
    sx={{
      position: "sticky",
      backgroundColor: "#0000",
      top: 0,
      justifyContent: "space-between",
      zIndex: "10",
      backgroundColor: "#121212",
    }}
  >
    <Link
      to="/"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar src={logo} alt="logo" sx={{ width: 45, height: 45 }}></Avatar>
      <Hidden only={"xs"}>
        <Typography
          variant="h5"
          sx={{ color: "white", marginX: "10px", fontWeight: "bold" }}
        >
          {" "}
          YouTube{" "}
        </Typography>
      </Hidden>
    </Link>

    <SearchBar />
  </Stack>
);

export default Navbar;
