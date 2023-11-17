import {CiSettings} from "react-icons/ci"
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";

const Settings = () => {
  return (
    <ul className="border-b">
    <li className="flex m-6 items-center cursor-pointer text-xl"><CiSettings className="mr-7 text-3xl"/> Settings</li>
    <li className="flex m-6 items-center cursor-pointer text-xl"><MdOutlineOutlinedFlag className="mr-7 text-3xl"/>Report history</li>
    <li className="flex m-6 items-center cursor-pointer text-xl"><IoIosHelpCircleOutline className="mr-7 text-3xl"/>Help</li>
    <li className="flex m-6 items-center cursor-pointer text-xl"><MdOutlineFeedback  className="mr-7 text-3xl"/>Send feedback</li>
    </ul>
  )
}
export default Settings