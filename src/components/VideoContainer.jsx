import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"
const VideoContainer = () => {
  const [videosList,setVideosList]= useState();


  useEffect(()=>{
    getVideos();
  },[])
  async function getVideos(){
    const data= await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=AIzaSyCX-_fo1DMJJxU0oavcGy-k0YIxEMmyN5E")
    const json=await data.json();
    setVideosList(json.items);
    //console.log(json.items);
  }
  return videosList === undefined ?null: (
    <div className="flex flex-wrap ml-96">
    {videosList.map((video)=>(
      <VideoCard key={video.id} info={video}/>
    ))}
    </div>
    
  )
}
export default VideoContainer