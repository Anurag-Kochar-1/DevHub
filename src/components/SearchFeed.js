import React, {useState, useEffect} from 'react'
import {Box , CircularProgress, Typography } from "@mui/material" 
import {Videos} from "./"
import { FetchFromApi } from '../utils/FetchFromApi'
import { useParams } from 'react-router-dom'

function SearchFeed() {
    const {searchTerm} = useParams()

    const [videos, setVideos] = useState([])

    useEffect(() => {
      window.scrollTo(0,0);
      
      FetchFromApi (`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
        .catch((err) => console.log(err.message) )

    },[searchTerm])

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {videos &&  <Videos videos={videos} /> }

        {!videos && (
          <Box sx={{backgroundColor: "black", zIndex: "100" , position: "fixed", top: "0", right: "0", left:"0", bottom: "0", width: "100vw", height: "100vh" , display: 'flex', justifyContent: "center", alignItems: "center" }}> <CircularProgress /> </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchFeed