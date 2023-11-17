import { LiaGreaterThanSolid } from "react-icons/lia";
import { LuUserSquare } from "react-icons/lu";
import { GoHistory } from "react-icons/go";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";


const You = () => {
  return (
    <div className="border-b">
    <div className="flex m-6 text-xl font-semibold cursor-pointer ml-6 items-baseline">You <LiaGreaterThanSolid className="text-sm ml-3"/></div>
    <ul>
      <li className="flex ml-6 items-center cursor-pointer text-xl"><LuUserSquare className="mr-7 text-3xl"/>Your channel</li>
      <li className="flex m-6 items-center cursor-pointer text-xl"><GoHistory className="mr-7 text-3xl"/>History</li>
      <li className="flex m-6 items-center cursor-pointer text-xl"><GoVideo className="mr-7 text-3xl"/>Your videos</li>  
      <li className="flex m-6 items-center cursor-pointer text-xl"><MdOutlineWatchLater className="mr-7 text-3xl"/>Watch later</li>  
      <li className="flex m-6 items-center cursor-pointer text-xl"><MdOutlineExpandMore className="mr-7 text-3xl"/>Show more</li>  
    </ul>
    </div>
  )
}
export default You