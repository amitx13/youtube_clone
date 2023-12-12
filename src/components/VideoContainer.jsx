
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import useVideos from "./useVideos";
const VideoContainer = () => {
  const videosList = useVideos();

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