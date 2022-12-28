import React from "react";
import { Stack, Avatar, Typography, Hidden, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import SearchBar from "./SearchBar";
// ICONS
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    py={2}
    px={3}
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
      {/* <Avatar src={logo} alt="logo" sx={{ width: 45, height: 45,  marginX: 2 }}></Avatar> */}

      {/* <Hidden only={"xs"}> */}
        <Typography
          variant="h5"
          sx={{fontSize: { xs: "1.4rem", md: "1.6rem" }, color: "white", fontWeight: "bold" }}
        >
          Dev 
        </Typography>
        <Typography
          variant="h5"
          sx={{fontSize: { xs: "1.4rem", md: "1.6rem" }, color: "black", backgroundColor:"#ffa31a", fontWeight: "bold", paddingX: 1, paddingY: 0.5, borderRadius: 2, marginLeft: 1 }}
        >
          Hub 
        </Typography>

      {/* </Hidden> */}
    </Link>

    {/* ============== SearchBar ============== */}
    <SearchBar />
    {/* ============== SearchBar ============== */}

    <Hidden only={"xs"}>
        <Stack direction="row" spacing={2} >
            <IconButton sx={{ "&:hover": { color: "lightgray" } , color: "white",}}>
                <VideoCallOutlinedIcon  />
            </IconButton>

            <IconButton sx={{ "&:hover": { color: "lightgray" } , color: "white",}}>
                <NotificationsOutlinedIcon  sx={{ color: "white" }} />
            </IconButton>

            <IconButton sx={{ "&:hover": { color: "lightgray" } , color: "white",}}>
                <PermIdentityOutlinedIcon  sx={{ color: "white"}} />
            </IconButton>

           
        </Stack>
    </Hidden>

  </Stack>
);

export default Navbar;
