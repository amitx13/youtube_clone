import { useEffect,useState } from "react";

const useVideos = () => {
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
  return videosList||undefined;
}
export default useVideos