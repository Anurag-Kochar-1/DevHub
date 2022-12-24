import React from 'react'
import {Stack, Box, CircularProgress} from "@mui/material"
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

function Videos({videos , direction}) {
    
  if(!videos) return <Box sx={{backgroundColor: "black", zIndex: "100" , position: "fixed", top: "0", right: "0", left:"0", bottom: "0", width: "100vw", height: "100vh" , display: 'flex', justifyContent: "center", alignItems: "center" }}> 
    <CircularProgress /> 
    </Box>
   

  return (
    <Stack direction={direction || "row"} sx={{ alignItems: "center", justifyContent: "center"}}  flexWrap="wrap"
    justifyContent="start" gap={2}
    >
        {videos.map((item, indx) => {
            return <Box key={indx}>
                {item.id.videoId && <VideoCard video={item} /> }
                {item.id.channelId && <ChannelCard channelDetail={item} />}
                
            </Box>
        })}

    </Stack>
  )
}

export default Videos