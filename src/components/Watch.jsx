import { useState,useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoIosMore } from "react-icons/io";
import useComment from "./useComment";
import { ShimmerTitle } from "react-shimmer-effects";
import ReactHtmlParser from 'react-html-parser';
import useVideos from "./useVideos";
import { Link } from "react-router-dom";

const Watch = () => {
    const [videoid] = useSearchParams()
    const [video,setVideo] = useState()
    const [isClicked, setisClicked] = useState(false);
    const videosList =useVideos();
    //console.log(videoid.get("v"));

    const Comments = useComment(videoid.get("v")) 

    useEffect(()=>{
        getVideo();
    },[])

    async function getVideo(){
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid.get("v")}&key=AIzaSyCX-_fo1DMJJxU0oavcGy-k0YIxEMmyN5E`)
        const json = await data.json();
        console.log(json)
        setVideo(json.items);
    }

function unHideDescription(){
        if (isClicked){
            setisClicked(false);
        }
        else{
            setisClicked(true);
        }
        
}
function timeAgo(timestamp) {
  const currentDate = new Date();
  const updatedDate = new Date(timestamp);

  const timeDifference = currentDate - updatedDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else {
    return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
  }
}
const LoadComments = ({ comment }) => {
  const {
    authorProfileImageUrl,
    authorDisplayName,
    textDisplay,
    updatedAt,
    likeCount,
  } = comment.snippet.topLevelComment.snippet;

  const formattedTimeAgo = timeAgo(updatedAt);

  return (
    <div className="flex mt-8 w-7/12">
      <img className=" w-12 h-12 rounded-full" src={authorProfileImageUrl} alt="profile.img" />
      <div className=" ml-4 ">
        <div>{authorDisplayName}</div>
        <div className="ml-3">{formattedTimeAgo}</div>
        <per className="ml-3">{textDisplay}</per>
        <div className="mt-3 flex items-center"><BiLike className="text-3xl ml-3"/>{likeCount}<BiDislike className="text-3xl  ml-6" /></div>
      </div>
      
    </div>
  );
};

function formatLikesCount(likesCount) {
  if (likesCount >= 1000000) {
    return `${(likesCount / 1000000).toFixed(1)}M`;
  } else if (likesCount >= 1000) {
    return `${(likesCount / 1000).toFixed(1)}K`;
  } else {
    return likesCount.toString();
  }
}

const VideoSideBar = ({info})=>{
    const {snippet} = info;
    const {url} = snippet.thumbnails.high;
    return(
      <div className="ml-7 flex w-full ">
        <div><img className="rounded-2xl w-60 h-32 object-cover flex-shrink-0 "src={url} alt="thumbnails" /></div>
      <div className="w-3/6 ml-2">
        <div className="font-bold" >{snippet.title}</div>
        <div className="text-stone-600">{snippet.channelTitle}</div>
        <div className="text-stone-600">{timeAgo(snippet.publishedAt)}</div>
      </div>
      </div>
    )
}
    
return video===undefined?null:(
    <div className="flex w-full">
        <div className="mt-8 w-4/6 --------------full">
          <div>
        <iframe className="rounded-2xl ml-28" width="1150" height="655" src={`https://www.youtube-nocookie.com/embed/${videoid.get("v")}`}title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>


        <div className="ml-28 mt-3 text-2xl font-bold">{video[0].snippet.title}</div>


        <div className="flex  items-center  ----------------4/6 ">
        
  <img className="ml-28 rounded-full w-12 h-12 object-cover mr-5 mt-3" src={video[0].snippet.thumbnails.high.url} alt="profile" />

  <div className="flex text-xl font-semibold">{video[0].snippet.channelTitle} {video[0].contentDetails.licensedContent?<IoCheckmarkCircleSharp className="opacity-50 mt-1 ml-1 text-lg" />:null}</div>
      
  <button type="submit" className="bg-black rounded-3xl h-12 w-32  text-white text-xl ml-8 mt-4">Subscribe</button>
    
    <div className="flex flex-grow justify-end">
        
  <div className="mt-4 flex items-center bg-stone-200 rounded-3xl h-12 w-40 hover:bg-stone-300 "><BiLike className="text-3xl  ml-3"/>{formatLikesCount(video[0].statistics.likeCount)}<BiDislike className="text-3xl  ml-6" /></div>

  <div className="mt-4 ml-3 font-semibold text-xl flex items-center bg-stone-200 rounded-3xl h-12 w-28 hover:bg-stone-300 "><PiShareFatLight className="text-3xl mt-1 ml-2 mr-2" />Share
  </div>

  <div className="mt-4 ml-3 font-semibold text-xl flex items-center bg-stone-200 rounded-3xl h-12 w-40 hover:bg-stone-300 "><LiaDownloadSolid className="text-3xl mt-1 ml-2 mr-2" />Download
  </div>

  <div className="mt-4 ml-3 font-semibold text-xl flex items-center bg-stone-200 rounded-3xl h-12 w-12 hover:bg-stone-300 "><IoIosMore className="text-3xl mt-1 ml-2 mr-2" />
  </div>

  </div>
        </div>

        <div className=" mt-5  -------------------4/6">
    <div onClick={()=>unHideDescription()} className={` bg-stone-200 ml-28  rounded-2xl  ${isClicked ?'hover:bg-stone-300 overflow-hidden' : 'h-32  hover:bg-stone-300 overflow-hidden'} `}><pre className="m-3">{ReactHtmlParser(video[0].snippet.description)}</pre></div>
        </div>

        <div className="font-bold text-3xl mt-5 ml-28">{video[0].statistics.commentCount+"\t"}Comments</div> 

        <div>{Comments===undefined?  <ShimmerTitle line={2} gap={10} variant="primary" />:(
          <div className="ml-28 mt-3 ">{
          Comments.items.map((comment)=>{
          return<LoadComments comment={comment}/>
        })}
        </div>
        )}</div>

        </div>

        <div className="flex w-3/6">
          <div className="">
          {videosList===undefined?null:videosList.map((video)=>(
          <Link to={"/watch?v="+video.id} className=" group pl-4 w-4/12  mt-20" onClick={()=>{offState()}} >
          <VideoSideBar key={video.id} info={video}/>
          </Link>
          ))}
    </div>
        </div>
    </div>
  )
}
export default Watch;