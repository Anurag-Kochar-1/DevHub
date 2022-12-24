import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Typography, Card , CardContent, CardMedia } from "@mui/material"
import { Check, CheckCircle} from "@mui/icons-material"
import "../index.css"
import { demoVideoUrl , demoVideoTitle , demoChannelUrl, demoChannelTitle  } from "../utils/constant"

const optionsConfig = {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.9,
}

function VideoCard({ video: {id: {videoId} , snippet} }) {


    useEffect(() => {
        let observer = new window.IntersectionObserver((entries, self) => {
        //    console.log(entries)
           
          entries.forEach((entry) => {
            if(entry.isIntersecting) {
              loadImage(entry.target)
    
              self.unobserve(entry.target)
            }
          })
        }, optionsConfig)
    
        const images = document.querySelectorAll("[data-src]")
        images.forEach(img => {
          observer.observe(img)
        })
    
        return () => {
          images.forEach(img => {
            observer.unobserve(img)
          })
        }
      },[])

    
      const loadImage = (image) => {
        image.src = image.dataset.src
      }




  return (
    <Card  sx={{ width: {md: "320px" , xs:"90vw", sm: "80vw"  }, boxShadow:"none" }}> 
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}> 
            {/* <CardMedia 
                component='img'
                image={``} 
                alt = {snippet?.title}
                sx={{width: {
                    xs: "100%", sm:"80vw" , md:"320px"
                }, height: 180}}
                data-src={`${snippet?.thumbnails?.high?.url}`} 
            /> */}

            <img src={``} data-src={`${snippet?.thumbnails?.high?.url}`} alt={snippet?.title} className="videoCard"  />
                    
        </Link>

        <CardContent sx={{backgroundColor: "#1e1e1e", height: "106px"}} >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}> 
                <Typography variant='subtitle1' 
                fontWeight='bold' color="#FFF"
                >
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}> 
                <Typography variant='subtitle2' 
                fontWeight='bold' color="gray"
                >
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize: 12, color: "gray", ml: "5px"}} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )

}

export default VideoCard