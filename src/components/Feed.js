import React, {useState, useEffect} from 'react'
import {Box, CircularProgress, Stack, Typography } from "@mui/material" 
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


  if(!videos) return <Box sx={{backgroundColor: "black", zIndex: "100" , position: "fixed", top: "0", right: "0", left:"0", bottom: "0", width: "100vw", height: "100vh" , display: 'flex', justifyContent: "center", alignItems: "center" }}> <CircularProgress /> </Box>

  return (

    <Stack sx={{flexDirection: {xs:"column", sm:"column", md:"row"} } }  >
        <Box sx={{height: {xs:"auto" , md: "92vh" }, borderRight : "1px solid #3d3d3d", px: {xs:0, md:2}}}>

            <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            />

            <Typography className="copyright"
            variant='body2' sx={{marginY:3, color: "#fff", fontWeight:"bold"}}
            >
                Anurag Kochar 2022 
            </Typography>
        </Box>

        <Box p={2} sx={{backgroundColor: "black", overflowY: "auto",height: "90vh", flex: 2 ,
            display: "flex", flexDirection: "column" , alignItems: "start"  
      
        }}className="BoxOfVideosContainer"> 


            <Typography
            variant='h4' fontWeight={"bold"} mb={2}
            sx={{color: "white"}}
            >
              {selectedCategory}  <span style={{color: "#ffa31a"}}> Videos </span>
            </Typography>

            

            <Videos videos={videos} />

        </Box>
    </Stack>
  )
}

export default Feed