import { LiaAdSolid } from "react-icons/lia";
const RightBar = () => {
  return (
    <div className="ads shadow-lg wrapper bg-white border-s border-slate-300 rounded-lg items-center w-1/6">
      <h2 className="px-2 py-2 items-center">
        ANUNCIE AQUI
      </h2>
      <div className="items-center w-full h-64 px-2 py-2 bg-gray-400 border-2">
        <LiaAdSolid className="h-8 w-8 text-gray-600 text-xl"/>
      </div>
    </div>
  )
}

export default RightBar
