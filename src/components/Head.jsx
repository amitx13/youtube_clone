import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";


const Head = () => {
  return (
    <div className="grid grid-flow-col shadow-lg ">
      <div className="flex col-span-1 p-5 ">
        <img className="h-8 pl-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&usqp=CAU" alt="menu-bar" />
        <img className="h-8 pl-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdB5idttrtpfZkhv3Dz20jvA14SXgOCOKQiBT6_tnEyagCBi91sEJMTU8X6eLxzb5dQ&usqp=CAU" alt="" />
      </div>

      <div className="col-span-10 p-3 pl-60 flex items-center">
    <input type="text" placeholder="Search" className="h-12 w-7/12 border-solid border border-gray-400 rounded-l-full  pl-4 border-r-0" />
    <button className="h-12 w-20 border-solid border border-gray-400 rounded-r-full pl-6"><FaSearch /></button>
    <button className="ml-5 h-11 w-11 rounded-full flex justify-center items-center bg-gray-100"><FaMicrophone className="text-xl"/></button>
</div>

      <div className="col-span-1 flex p-5 justify-around ">
        <img className="h-8" src="https://friconix.com/jpg/fi-xnluxx-videocamera.jpg" alt="create" />
        <img className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3i9k6Q_djV-43l929W00pvsqpuU_7tjQOmyJS_f7M7ChV76j94zu1WsTiB5Dp-5nPZc&usqp=CAUs" alt="notification" />
        <img className="h-8" src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" alt="user" />
        
      </div>
    </div>
  )
}
export default Head