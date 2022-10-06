import React from 'react'
import { Stack , Avatar} from "@mui/material"
import { Link  } from "react-router-dom"
import { logo } from "../utils/constant"
import SearchBar from './SearchBar'

// backgroundColor: "#121212"height={45}

const Navbar = () => (
    <Stack 
    direction='row' 
    alignItems='center' 
    p={2} s
    sx={{position: "sticky", backgroundColor: "#0000", top: 0, 
    justifyContent: "space-between" , zIndex:"10", backgroundColor: "#121212",
    
    
    }} 
    
    >

       
            <Link to="/" style={{ display: "flex", alignItems :"center"}}>
                    {/* <img src={logo} alt="logo"  height={30} style={{display: "hidden"}}  /> */}
                    <Avatar src={logo} alt="logo"  sx={{ width: 45, height: 45 }}>

                    </Avatar>
            </Link>
        

        <SearchBar />
    </Stack>
)

export default Navbar