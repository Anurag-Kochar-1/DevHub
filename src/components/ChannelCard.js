import React from 'react'
import {Box, CardContent , CardMedia , Typography} from "@mui/material"
import {CheckCircle, CheckCirlce} from "@mui/icons-material"
import { Link } from 'react-router-dom'
import { demoProfilePicture } from "../utils/constant"

const ChannelCard = ({ channelDetail , marginTop }) => (
    <Box
    sx={{boxShadow: "none",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems : "center",
    width: {xs: "356px" , md:"320px"},
    height: "326px",
    margin: "auto",
    marginTop: {marginTop},
    }}
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent 
            sx={{
                diplay: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: 'center',
                color: "#fff",
                // backgroundColor: "red"
                

            }}
            >
                <CardMedia 
                component='img'
                image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                alt={channelDetail?.snippet?.title}
                sx={{borderRadius: "50%", height: "180px", width:"180px", mb:2, border:"1px solid #e3e3e3", ml:'25px'}}
                />

                <Typography variant='h6'>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{fontSize: 14, color: "gray", ml: "5px"}} />
                </Typography>

                {channelDetail?.statistics?.subscriberCount && 
                <Typography>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers Subscibers
                </Typography>
                }

            </CardContent>
        </Link>

    </Box>
) 

export default ChannelCard