import { RiNumbersFill } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { LuTags } from "react-icons/lu";
import { IoSchoolSharp } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className=" text-white h-screen w-1/5 py-px space-y-3">
      <div className="shadow-lg bg-cyan-600 rounded-lg border-transparent border-8 text-xl">
        <ul className="flex-column items-center ">
          <li className="flex items-center gap-2 py-3">
            <a href="" className="flex gap-2 hover:text-yellow-400">
              <RiNumbersFill />
              <span> Top 10 da Semana</span>
            </a>
          </li>
          <li className="flex gap-2 items-center py-3">
            <a href="" className="flex gap-2 hover:text-yellow-400">
              <TbCategory /><span>Categorias</span>
            </a>
          </li>
          <li className="flex gap-2 items-center py-3">
            <a href="" className="flex gap-2 hover:text-yellow-400">
              <LuTags />
              <span> Tags</span>
            </a>
          </li>
          <li className="flex gap-2 items-center py-3">
            <a href="" className="flex gap-2 hover:text-yellow-400">
              <IoSchoolSharp />
              <span>Educação</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="shadow-lg bg-cyan-600 rounded-lg place-content-baseline border-transparent border-8 ">
        <ul>
          <li className=" hover:text-yellow-400">
            <a href="">Sobre nós</a>
          </li>
          <li className=" hover:text-yellow-400">
            <a href="">Fale Conosco</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
