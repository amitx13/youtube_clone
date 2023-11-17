import { FaFireFlameCurved } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdMusicalNote } from "react-icons/io";
import { MdMovie } from "react-icons/md";
import { CiStreamOn } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiOutlineTrophy } from "react-icons/hi2";
import { AiOutlineBulb } from "react-icons/ai";
import { GiHanger } from "react-icons/gi";
import { BiPodcast } from "react-icons/bi";


const Explore = () => {
  return (
    <div className="border-b">
    <div className="text-xl m-6 font-semibold ml-6">Explore</div>
    <ul  >
      <li className="flex ml-6  items-center cursor-pointer text-xl"><FaFireFlameCurved  className="mr-7 text-3xl"/> Trending</li>
      <li className="flex m-6 items-center cursor-pointer text-xl"><FiShoppingBag className="mr-7 text-3xl"/>Shopping</li>
      <li className="flex m-6 items-center cursor-pointer text-xl"><IoMdMusicalNote className="mr-7 text-3xl "/>Music</li>
      <li className="flex  m-6 items-center cursor-pointer text-xl"><MdMovie className="mr-7 text-3xl"/>Movies</li>
      <li className="flex  m-6 items-center cursor-pointer text-xl"><CiStreamOn className="mr-7 text-3xl"/>Live</li>
      <li className="flex  m-6 items-center cursor-pointer text-xl"><SiYoutubegaming className="mr-7 text-3xl"/>Gaming</li>
      <li className="flex  m-6 items-center cursor-pointer text-xl"><IoNewspaperOutline  className="mr-7 text-3xl"/>News</li>
      <li className="flex  m-6 items-center cursor-pointer text-xl"><HiOutlineTrophy className="mr-7 text-3xl"/>Sports</li>
      <li className="flex  m-6 items-center cursor-pointer text-xl"><AiOutlineBulb className="mr-7 text-3xl"/>Learning</li>
      <li className="flex  m-6 items-center cursor-pointer text-xl"><GiHanger  className="mr-7 text-3xl"/>Fashion & Beauty</li>
      <li className="flex  m-6 items-center cursor-pointer text-xl"><BiPodcast  className="mr-7 text-3xl"/>Podcast</li>
    </ul>
    </div>
  )
}
export default Explore