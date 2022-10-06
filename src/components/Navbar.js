import React from 'react'
import { Stack } from "@mui/material"
import { Link  } from "react-router-dom"
import { logo } from "../utils/constant"
import SearchBar from './SearchBar'

const Navbar = () => (
    <Stack 
    direction='row' 
    alignItems='center' 
    p={2} s
    sx={{position: "sticky", backgroundColor: "#0000", top: 0, 
    justifyContent: "space-between" , zIndex:"10", backgroundColor: "#121212"
    
    }} 
    
    >


        <Link to="/" style={{display: "flex", alignItems :"center"}}>
            <img src={logo} alt="logo" height={45} />
        </Link>

        <SearchBar />
    </Stack>
)

export default Navbar