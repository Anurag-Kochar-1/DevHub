import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Videos } from "./";
import { FetchFromApi } from "../utils/FetchFromApi";
import DevHubIntro from "../assets/gifs/DevHubIntro.gif"

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0,0)
    FetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);



  // const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;



  if (!videos) return (
    <Box sx={{ backgroundColor: "black", zIndex: "100", position: "fixed", top: "0", right: "0", left: "0", bottom: "0", width: "100vw", height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center" }}>
      {/* <CircularProgress />  */}
      <img style={{width: "50%"}} src={DevHubIntro} alt="intro" />
    </Box>
  )

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "column", justifyContent: "start", alignItems: "center" }}>
        <Box flex={1} sx={{ display: "flex", flexDirection: "column" ,justifyContent: "start", alignItems: "center" }}>
          <Box sx={{ width: "100%", position: "relative", top: "0" }}>
            {/* ---------- PLAYER ----------  */}
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls playing={true} />

            {/* ---------- TITLE ----------  */}
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.snippet.title}
            </Typography>

            {/* ---------- CHANNEL TITLE ----------  */}
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography sx={{ typography: { sm: 'subtitle1', md: 'h6' } }} color='#fff'>
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>

              {/* ---------- VIEWS and LIKES ----------  */}
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }} onClick={() => console.log(videoDetail?.snippet?.localized?.description)}>
                  {videoDetail?.statistics?.viewCount && parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {videoDetail?.statistics?.likeCount && parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>

            </Stack>

            
          </Box>
        </Box>



        {/* <Box sx={{backgroundColor: "orange" , width: "100%", dislay: "flex", flexDirection: "column" , justifyContent: "center", alignItems:"center", padding:1, borderRadius: "20px", }} >

          <Box sx={{ width: {xs: "100%", sm: "80%"}, backgroundColor: "#272727", dislay: "flex", justifyContent: "center", alignItems: "center", padding: 4, borderRadius: "20px"}} >

            <Typography variant="body1" component="body1" sx={{color: "white"}}> {videoDetail?.snippet?.localized?.description} </Typography>

          </Box>
        </Box> */}


        <Typography variant="h6" component="h6" sx={{ backgroundColor: "#ffa31a" , color:"black", marginX: "auto", marginY: 2, fontWeight:"bold", padding: 3, borderRadius: 2}}> Suggested Videos </Typography>

        <Box px={2} py={{ md: 1, xs: 5 }}   >
          <Videos videos={videos} direction="row" />
        </Box>

      </Stack>
    </Box>
  );
};

export default VideoDetail;