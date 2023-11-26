import Settings from "./SideBar/Settings"
import Home from "./SideBar/Home"
import MorefromYoutube from "./SideBar/MorefromYoutube"
import Explore from "./SideBar/Explore"
import Subscriptions from "./SideBar/Subscriptions"
import You from "./SideBar/You"
import { useSelector } from "react-redux"

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
  <>
    <div  className='w-2/12 overflow-hidden hover:overflow-auto h-screen flex-shrink-0 fixed bg-white'>
      <Home/>
      <You/>
      <Subscriptions/>
      <Explore/>
      <MorefromYoutube/>
      <Settings/>
    </div>
    </>

  ) 
}
export default Sidebar