import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

const Home = () => {
  return (
    <ul className="border-b">
      <li className="flex m-6 items-center cursor-pointer text-xl"><MdHomeFilled  className="mr-7 text-3xl"/>Home</li>
      <li className="flex m-6 items-center cursor-pointer text-xl"><SiYoutubeshorts  className="mr-7 text-3xl"/>Shorts</li>
      <li className="flex m-6 items-center cursor-pointer text-xl"><MdOutlineSubscriptions  className="mr-7 text-3xl"/>Subscriptions</li>
    </ul>
  )
}
export default Home 