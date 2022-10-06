import React, {useState, useEffect} from 'react'
import {Box, Stack, Typography } from "@mui/material" 
import {Sidebar, Videos} from "./"
import { FetchFromApi } from '../utils/FetchFromApi'
import "../index.css"

function Feed() {

    const [ selectedCategory, setSelectedCategory ] = useState("")
    const [videos, setVideos] = useState([])

    useEffect(() => {
        FetchFromApi (`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
        .catch((err) => console.log(err.message) )
    },[selectedCategory])

  return (

    <Stack sx={{flexDirection: {xs:"column", sm:"column", md:"row"} } }  >
        <Box sx={{height: {xs:"auto" , md: "92vh" }, borderRight : "1px solid #3d3d3d", px: {xs:0, md:2}}}>

            <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            />

            <Typography className="copyright"
            variant='body2' sx={{mt:1.5, color: "#fff"}}
            >
                Copyright 2022 JSM Media
            </Typography>
        </Box>

        <Box p={2} sx={{overflowY: "auto",height: "90vh", flex: 2 ,
            display: "flex", flexDirection: "column" , alignItems: "start"
      
            }}    className="BoxOfVideosContainer"> //
            <Typography
            variant='h4' fontWeight={"bold"} mb={2}
            sx={{color: "white"}}
            >
              {selectedCategory}  <span style={{color: "#F31503"}}> Videos </span>
            </Typography>

            <Videos videos={videos} />

            
        </Box>
    </Stack>
  )
}

export default Feed