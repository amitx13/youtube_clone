import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { SiYoutubestudio } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";

const MorefromYoutube = () => {
  return (
    <div className="border-b">
    <div className="text-xl m-6 font-semibold ml-6">MorefromYoutube</div>
    <ul>
      <li className="flex ml-6 items-center cursor-pointer text-xl"><FiYoutube className="mr-7 text-3xl"/>YouTube Premium</li>
      <li className="flex m-6 items-center cursor-pointer text-xl"><SiYoutubestudio className="mr-7 text-3xl"/>YouTube Studio</li>
      <li className="flex m-6 items-center cursor-pointer text-xl">< SiYoutubemusic className="mr-7 text-3xl"/>YouTube Music</li>
      <li className="flex m-6 items-center cursor-pointer text-xl">< TbBrandYoutubeKids className="mr-7 text-3xl"/>YouTube Kids</li>
    </ul>
    </div>
  )
}
export default MorefromYoutube