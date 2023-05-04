import React, { useState, useEffect } from 'react'
import { Box, CircularProgress, Stack, Typography } from "@mui/material"
import { Sidebar, Videos } from "./"
import { FetchFromApi } from '../utils/FetchFromApi'
import "../index.css"
import DevHubIntro from '../assets/gifs/DevHubIntro.gif'

function Feed() {

    const [selectedCategory, setSelectedCategory] = useState("Web Development")
    const [videos, setVideos] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        FetchFromApi(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => {
                setVideos(data.items) 
                setTimeout(() => {
                    setIsLoaded(true)
                }, 1000);
            })
            .catch((err) => console.log(err.message))
    }, [selectedCategory])


    if (!isLoaded) return (
        <Box sx={{ backgroundColor: "black", zIndex: "100", position: "fixed", top: "0", right: "0", left: "0", bottom: "0", width: "100vw", height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center" }}>                
            {/* <CircularProgress />  */}
            <img style={{width: "50%"}} src={DevHubIntro} alt="intro" />
         </Box>
    )

    return (

        <Stack sx={{ flexDirection: { xs: "column", sm: "column", md: "row", backgroundColor: "black", height: "93vh" } }}  >

            <Box sx={{ height: {xs:"auto" , md: "93vh" }, borderRight: "1px solid #3d3d3d", px: { xs: 0, md: 1 } }}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </Box>

            <Box px={2} py={3} sx={{
                backgroundColor: "black", overflowY: "auto",  flex: 2,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start"

            }} className="BoxOfVideosContainer">


                {selectedCategory !== "Web Development" && (
                    <Typography
                        variant='h4' fontWeight={"bold"} py={2}
                        sx={{ color: "white" }}
                    >
                        {selectedCategory} <span style={{ color: "#ffa31a" }}> Videos </span>
                    </Typography>
                )
                }


                <Videos videos={videos} />
                


            </Box>
        </Stack>
    )
}

export default Feed