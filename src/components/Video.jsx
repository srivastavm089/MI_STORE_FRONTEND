import React from 'react'
import VideoCard from './VideoCard'
import "../style/video.css";
const Video = ({video}) => {
  return (
    <div className='video-pr'>
        {
            video.map((item,index)=>{
               return  <VideoCard key={item.images} index={index} image={item.image} name={item.name}/>
            })
        }
    </div>
  )
}

export default Video