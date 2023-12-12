import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";



const VideoCard = ({info}) => {
  const {snippet,statistics,contentDetails} = info;
 /*  console.log(info);
  console.log(statistics.likeCount);
  console.log(snippet.title);
  console.log(snippet.channelTitle);
  console.log(snippet.publishedAt); */
  const {url} = snippet.thumbnails.high;
  const status = contentDetails.licensedContent;
  return (
    <>
    <div>
    <img className="rounded-2xl w-full h-72 object-cover "src={url} alt="thumbnails" />
    <ul className="flex mt-3 items-start relative">
      <img className="rounded-full w-11 h-11 object-cover mr-5 mt-3"src={url} alt="thumbnails" />
      <div>
        <li className="font-semibold text-xl py-2">{snippet.title}</li>
      <li className="flex items-center">{snippet.channelTitle}{status?<IoCheckmarkCircleSharp className="font-light" />:null}</li>
      <li>{statistics.likeCount+" "+snippet.publishedAt}</li>
      </div>
      <div className="opacity-0  group-hover:opacity-100  absolute right-0"><IoMdMore className="text-3xl" /></div>
    </ul>
    </div>
    </>
  )
}
export default VideoCard