import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from "@mui/material"
import { FetchFromApi } from '../utils/FetchFromApi'
import ChannelCard from './ChannelCard'
import Videos from './Videos'

function ChannelDetail() {
    const {id } = useParams()
    const [channelDetail , setChannelDetail] = useState(null)
    const [channelVideos , setChannelVideos] = useState([])

    useEffect(() => {
        FetchFromApi(`channels?part=snippet&id=${id}`)
        .then((data) => setChannelDetail(data?.items[0]) )

        FetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
        .then((data) => setChannelVideos(data?.items) )
    },[id])

    // console.log(channelVideos, channelDetail)

  return (
    <Box minHeight='95vh'> 
        <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: "300px"
        }} />

         <ChannelCard channelDetail={channelDetail} 
         marginTop = {'-93px'}
         />
        </Box>

        <Box display={'flex'} p='2px'>
            
            <Box sx={{mr:{sm:'100px'}}} />
            <Videos videos={channelVideos} />

            
        </Box>
    
    </Box>
  )
}

export default ChannelDetail