import { useState,useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoIosMore } from "react-icons/io";

const Watch = () => {
    const [videoid] = useSearchParams()
    const [video,setVideo] = useState()
    const [isClicked, setisClicked] = useState(false);
    //console.log(videoid.get("v"));
    useEffect(()=>{
        getVideo();
    },[])

    async function getVideo(){
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid.get("v")}&key=AIzaSyCX-_fo1DMJJxU0oavcGy-k0YIxEMmyN5E`)
        const json = await data.json();
        console.log(json.items)
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
    
  return video===undefined?null:(
    <div className="mt-8 w-full">
        <div>
        <iframe className="rounded-2xl ml-28" width="1150" height="655" src={`https://www.youtube-nocookie.com/embed/${videoid.get("v")}`}title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>


        <div className="ml-28 mt-3 text-2xl font-bold">{video[0].snippet.title}</div>


        <div className="flex items-center w-4/6 ">
        
  <img className="ml-28 rounded-full w-12 h-12 object-cover mr-5 mt-3" src={video[0].snippet.thumbnails.high.url} alt="profile" />

  <div className="flex text-xl font-semibold">{video[0].snippet.channelTitle} {video[0].contentDetails.licensedContent?<IoCheckmarkCircleSharp className="opacity-50 mt-1 ml-1 text-lg" />:null}</div>
      
  <button type="submit" className="bg-black rounded-3xl h-12 w-32  text-white text-xl ml-8 mt-4">Subscribe</button>
    
    <div className="flex flex-grow justify-end">
        
  <div className="mt-4 flex items-center bg-stone-200 rounded-3xl h-12 w-40 hover:bg-stone-300 "><BiLike className="text-3xl  ml-3"/><BiDislike className="text-3xl  ml-16" /></div>

  <div className="mt-4 ml-3 font-semibold text-xl flex items-center bg-stone-200 rounded-3xl h-12 w-28 hover:bg-stone-300 "><PiShareFatLight className="text-3xl mt-1 ml-2 mr-2" />Share
  </div>

  <div className="mt-4 ml-3 font-semibold text-xl flex items-center bg-stone-200 rounded-3xl h-12 w-40 hover:bg-stone-300 "><LiaDownloadSolid className="text-3xl mt-1 ml-2 mr-2" />Download
  </div>

  <div className="mt-4 ml-3 font-semibold text-xl flex items-center bg-stone-200 rounded-3xl h-12 w-12 hover:bg-stone-300 "><IoIosMore className="text-3xl mt-1 ml-2 mr-2" />
  </div>

  </div>
        </div>

        <div className="w-4/6 mt-5">
    <div onClick={()=>unHideDescription()} className={` bg-stone-200 ml-28  rounded-2xl  ${isClicked ?'hover:bg-stone-300 ' : 'h-32  hover:bg-stone-300 overflow-hidden'} `}><pre className="m-3">{video[0].snippet.description}</pre></div>
        </div>

        <div className="font-bold text-3xl ml-28">{video[0].statistics.commentCount+"\t"}Comments</div>
    </div>
  )
}
export default Watch;