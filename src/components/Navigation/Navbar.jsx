import Logo from "./Logo"
import { IoChatbubblesOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import SearchBar from "./SearchBar"
import { IoNotificationsOutline } from "react-icons/io5";
import { LiaDoorOpenSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <nav className="h-[70px] place-content-evenly top-0 sticky bg-cyan-600 items-center flex w-full ">
      <div className="Left" style={{flex:1}}>
        <div className="logo">
          <Logo></Logo>
        </div>
      </div>
      <div className="Center " style={{flex:4}}>
        <div className="searchBar">
          <SearchBar/>
        </div>
      </div>
      <div className="Right flex items-center place-content-evenly px-px mr-6">
        <div className="mr-2 px-px text-yellow-400 tabIcons flex place-content-evenly space-x-2 items-center "style={{flex:4}}>

           <a href="" className="font-semibold"> <GoPerson className="text-white h-6 w-6"/>Feed</a>
           <a href="" className="font-semibold"> <IoChatbubblesOutline className="text-white h-6 w-6"/>Chat</a>
           <a href="" className="font-semibold"> <IoNotificationsOutline className="text-white h-6 w-6"/>Alertas</a>
           <a href="/auth" className="font-semibold"><LiaDoorOpenSolid className="text-white h-6 w-6 hover:text-red-600"/>Logout</a>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar
