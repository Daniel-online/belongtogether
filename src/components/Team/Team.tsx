import { IoLogoWhatsapp } from "react-icons/io";
import Action from "../Buttons/Action";
import Cards from "../Content/Cards";
import buttonRef from "./../../Data/buttonRef.json";

interface TeamProps {
  id: string;
  data: Array<Record<string, any>>;
  title: string;
  titleStyle?: string;
  style?: string;
}

const Team = ({ data, title, titleStyle = "", style = "", id }: TeamProps) => {
  console.log("Action clicked:", buttonRef);

  return (
    <div id={id}>
      <div className={titleStyle}>
        <h3>{title}</h3>
      </div>

      <div className={style}>
        <Cards
          cardData={data}
          style="bg-black border-red-500 border-4 text-slate-200 min-h-full bg-opacity-80 hover:bg-opacity-100 w-80 mx-2"
          imageStyle="border-b-2 border-red-500 rounded-md size-32 object-cover w-full h-auto"
          id="cards"
          buttonTitle="CONHECER MAIS"
          buttonStyle="bg-red-500  backdrop-blur-sm border border-white border-opacity-50 text-white-500 font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg hover:bg-white hover:text-red-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          actionStyle="flex justify-center"
          buttonImage=""
          buttonRef={buttonRef} // ✅ The key fix
        />
      </div>
      <Action
         title={
                        <span className="flex items-center gap-3">
                            <IoLogoWhatsapp
                                className="te xt-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-colors duration-300 group-hover:text-red-500"
                            />
                            <span className="text-lg sm:text-xl md:text-2xl font-bold">
                                Procura algo específico? Fale Conosco!
                            </span>
                        </span>
                    }
        style={"flex justify-center bg-black"}
        buttonStyle={"bg-green-500  backdrop-blur-sm border border-white border-opacity-50 text-white font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg hover:bg-white hover:text-red-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"}
       
        href="#contato"
      />
    </div>
  );
};

export default Team;
