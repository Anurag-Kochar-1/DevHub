import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, Zoom } from "@mui/material"
import { CheckCircle, Scale } from "@mui/icons-material"
import "../index.css"
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constant"

const optionsConfig = {
  rootMargin: '300px 0px 0px 0px',
  threshold: 0,
}

function VideoCard({ video: { id: { videoId }, snippet } }) {
  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false)

  useEffect(() => {
    
    let observer = new window.IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
  }, [videoId])


  const loadImage = (image) => {
    image.src = image.dataset.src
  }



  return (
    <Zoom in={true} className="transitionProperty">

      <Card sx={{ width: { xs: "70vw", sm: "40vw", md: "20vw", }, boxShadow: "none", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center", backgroundColor: "#1e1e1e" }} onClick={() => console.log(videoId)}>


        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
          <img src={``} data-src={`${snippet?.thumbnails?.high?.url}`} alt={snippet?.title} className={isThumbnailLoaded ? "videoCard" : "videoCardPlaceholder"} onLoad={() => setIsThumbnailLoaded(true)} />
        </Link>

        <CardContent sx={{ backgroundColor: "#1e1e1e", width: "100%", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }} >
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1'
              fontWeight='bold' color="#FFF"
              sx={{ paddingX: 2, paddingY: 1 }}
            >
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>

          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant='subtitle2'
              fontWeight='bold' color="gray"
              sx={{ paddingX: 2, paddingY: 1 }}
            >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>

      </Card>
    </Zoom>
  )

}

export default VideoCard