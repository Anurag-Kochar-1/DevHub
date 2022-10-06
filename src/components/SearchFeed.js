import React, {useState, useEffect} from 'react'
import {Box , Typography } from "@mui/material" 
import {Videos} from "./"
import { FetchFromApi } from '../utils/FetchFromApi'
import { useParams } from 'react-router-dom'

function SearchFeed() {
    const {searchTerm} = useParams()

    const [videos, setVideos] = useState([])

    useEffect(() => {
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
        {<Videos videos={videos} />}
      </Box>
    </Box>
  )
}

export default SearchFeed