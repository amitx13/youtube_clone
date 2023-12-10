import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
const VideoContainer = () => {
  const [videosList,setVideosList]= useState();


  useEffect(()=>{
    getVideos();
  },[])
  async function getVideos(){
    const data= await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyCX-_fo1DMJJxU0oavcGy-k0YIxEMmyN5E")
    const json=await data.json();
    setVideosList(json.items);
    //console.log(json.items);
  }

  const dispatch = useDispatch();
  const offState = ()=>{
    dispatch(closeMenu());
  }

  return videosList === undefined ?null: (
    <div className="flex flex-wrap ml-80">
    {videosList.map((video)=>(
      <Link to={"/watch?v="+video.id} className=" group pl-4 w-4/12  mt-20" onClick={()=>{offState()}} >
      <VideoCard key={video.id} info={video}/>
      </Link>
    ))}
    </div>
    
  )
}
export default VideoContainer