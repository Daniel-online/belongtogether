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
          buttonStyle="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-50 text-red-500 font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          actionStyle="flex justify-center"
          buttonImage=""
          buttonRef={buttonRef} // ✅ The key fix
        />
      </div>
      <Action
        title={"FALE CONOSCO"}
        style={"flex justify-center bg-black"}
        buttonStyle={"bg-red-500 bg-opacity-50 backdrop-blur-sm border border-white border-opacity-50 text-white font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg hover:bg-white hover:text-red-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"}
       
        href="#contato"
      />
    </div>
  );
};

export default Team;
