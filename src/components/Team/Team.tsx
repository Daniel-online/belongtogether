import { IoLogoWhatsapp } from "react-icons/io";
import Action from "../Buttons/Action";
import Card from "../Content/Card";
import buttonRef from "./../../Data/buttonRef.json";
import Bambuterapia from '@assets/bambuterapia.jpg';
import Ventosaterapia from '@assets/ventosoterapia.jpg';
import PedrasQuentes from '@assets/pedras-quentes.jpg';
import massagemNuru from '@assets/profiles/nuru-hq.jpg';
import massagemSecreta from '@assets/massagemSecreta_card.jpg';
import massagemRelaxante from '@assets/profiles/relaxante-hq.jpg';
import massagemTantrica from '@assets/profiles/tantrica-hq.jpg';
import Depilacao from '@assets/depilacao.jpg';

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

      {/* Adicionei items-stretch para garantir que cada card estique verticalmente e fique alinhado */}
      <div className={`${style} items-stretch`}>

        <Card
          title="MASSAGEM SECRETA"
          subTitle=""
          text="Técnicas exclusivas, desenvolvidas com anos de experiência em massoterapia. Um serviço de luxo PREMIUM, feito na medida certa para despertar sua curiosidade… 🤫"
          image={massagemSecreta}
          alt="Massagem Secreta"
          style="bg-black border-red-500 border-4 text-slate-200  bg-opacity-80 hover:bg-opacity-100 w-fit mx-2"
          imageStyle="border-b-2 border-red-500 rounded-md size-32 object-cover w-full h-auto"
          id="cards"
          buttonTitle="CONHECER MAIS"
          buttonStyle="bg-red-500  backdrop-blur-sm border border-white border-opacity-50 text-white-500 font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg hover:bg-white hover:text-red-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          actionStyle="flex justify-center"
          buttonImage=""
          buttonRef="#"
        />
        <Card
          title="MASSAGEM NURU"
          subTitle="RELAXANTE + SENSITIVE"
          text="A Massagem Nuru é uma experiência única, em que o terapeuta utiliza todo o seu corpo de forma sensível e conectada. Ideal para quem busca um novo nível de prazer e relaxamento, combinando técnicas de massagem erótica e relaxante. O principal objetivo é proporcionar bem-estar profundo, prazer intenso e momentos de entrega total, com confiança e segurança durante todo o atendimento. Durante o processo, também pode ser incorporada a Lingam ou Yoni Massagem, elevando a experiência a um estágio de satisfação e intimidade jamais imaginados.😈"
          image={massagemNuru}
          alt="Imagem de exemplo"
          style="bg-black border-red-500 border-4 text-slate-200  bg-opacity-80 hover:bg-opacity-100 w-fit mx-2"
          imageStyle="border-b-2 border-red-500 rounded-md size-32 object-cover w-full h-auto"
          id="cards"
          buttonTitle="CONHECER MAIS"
          buttonStyle="bg-red-500  backdrop-blur-sm border border-white border-opacity-50 text-white-500 font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg hover:bg-white hover:text-red-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          actionStyle="flex justify-center"
          buttonImage=""
          buttonRef="#"
        />
        <Card
          title="MASSAGEM TÂNTRICA"
          subTitle="TÂNTRICA + RELAXANTE + SENSITIVE"
          text="Descubra a Massagem Relaxante elevada a uma nova arte: um encontro de profundo bem-estar e despertar sensual, guiado por **mãos profissionais** e experientes. \n Nossa  técnica é a soma de anos de prática e aprimoramento, integrando o melhor das massagens clássicas com o toque sutil e consciente que evoca o erotismo e o prazer. Cada movimento é executado com precisão e sensibilidade, visando não apenas o alívio das tensões musculares, mas a expansão de todas as suas sensações. \n Permita-se entregar a este ritual onde o cuidado profissional se une ao despertar do erotismo. É o momento ideal para desligar a mente, relaxar profundamente e redescobrir a beleza e a sensualidade do seu próprio corpo, através de um toque que é técnico, respeitoso e inesquecível."
          image={massagemTantrica}
          alt="Massagem Tantrica"
          style="bg-black border-red-500 border-4 text-slate-200  bg-opacity-80 hover:bg-opacity-100 w-fit mx-2"
          imageStyle="border-b-2 border-red-500 rounded-md size-32 object-cover w-full h-auto"
          id="cards"
          buttonTitle="CONHECER MAIS"
          buttonStyle="bg-red-500  backdrop-blur-sm border border-white border-opacity-50 text-white-500 font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg hover:bg-white hover:text-red-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          actionStyle="flex justify-center"
          buttonImage=""
          buttonRef="#"
        />
        <Card
          title="MASSAGEM RELAXANTE"
          subTitle="RELAXANTE + SENSITIVE + ALONGAMENTOS "
          text="Trabalha toda a musculatura, proporcionando alívio de tensões e relaxamento profundo. Técnicas de fricção, amassamento, shiatsu, reflexologia podal e alongamentos promovem o fluxo de energia pelo corpo, cuidando da sua saúde física e emocional. \n Uma experiência essencial para restaurar o bem-estar completo e renovar suas energias."
          image={massagemRelaxante}
          alt="Massagem Relaxante"
          style="bg-black border-red-500 border-4 text-slate-200  bg-opacity-80 hover:bg-opacity-100 w-fit mx-2"
          imageStyle="border-b-2 border-red-500 rounded-md size-32 object-cover w-full h-auto"
          id="cards"
          buttonTitle="CONHECER MAIS"
          buttonStyle="bg-red-500  backdrop-blur-sm border border-white border-opacity-50 text-white-500 font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg hover:bg-white hover:text-red-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          actionStyle="flex justify-center"
          buttonImage=""
          buttonRef="#"
        />
        <Card
          title="MASSAGEM COM PEDRAS QUENTES"
          subTitle=""
          text="  Relaxamento profundo e calor terapêutico. Pedras aquecidas são aplicadas estrategicamente para aliviar tensões, aumentar a circulação e desbloquear energias. Uma experiência que revitaliza o corpo e acalma a mente, trazendo conforto, prazer e bem-estar absoluto."
          image={PedrasQuentes}
          alt="Massagem com Pedras Quentes"
          style="bg-black border-red-500 border-4 text-slate-200  bg-opacity-80 hover:bg-opacity-100 w-fit mx-2"
          imageStyle="border-b-2 border-red-500 rounded-md size-32 object-cover w-full h-auto"
          id="cards"
          buttonTitle="CONHECER MAIS"
          buttonStyle="bg-red-500  backdrop-blur-sm border border-white border-opacity-50 text-white-500 font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg hover:bg-white hover:text-red-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          actionStyle="flex justify-center"
          buttonImage=""
          buttonRef="#"
        />
        <Card
          title="VENTOSA TERAPIA"
          subTitle=""
          text="Técnicas exclusivas, desenvolvidas com anos de experiência em massoterapia. Um serviço de luxo PREMIUM, feito na medida certa para despertar sua curiosidade… 🤫"
          image={Ventosaterapia}
          alt="Ventosa Terapia"
          style="bg-black border-red-500 border-4 text-slate-200  bg-opacity-80 hover:bg-opacity-100 w-fit mx-2"
          imageStyle="border-b-2 border-red-500 rounded-md size-32 object-cover w-full h-auto"
          id="cards"
          buttonTitle="CONHECER MAIS"
          buttonStyle="bg-red-500  backdrop-blur-sm border border-white border-opacity-50 text-white-500 font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg hover:bg-white hover:text-red-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          actionStyle="flex justify-center"
          buttonImage=""
          buttonRef="#"
        />
        <Card
          title="BAMBUTERAPIA"
          subTitle=""
          text="Força, precisão e relaxamento profundo. A técnica utiliza bambus de diferentes tamanhos para amassar, descontrair e revitalizar a musculatura, promovendo alívio de tensões e melhora da circulação. Uma experiência única que une técnica, conforto e bem-estar completo."
          image={Bambuterapia}
          alt="Bambuterapia"
          style="bg-black border-red-500 border-4 text-slate-200  bg-opacity-80 hover:bg-opacity-100 w-fit mx-2"
          imageStyle="border-b-2 border-red-500 rounded-md size-32 object-cover w-full h-auto"
          id="cards"
          buttonTitle="CONHECER MAIS"
          buttonStyle="bg-red-500  backdrop-blur-sm border border-white border-opacity-50 text-white-500 font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg hover:bg-white hover:text-red-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          actionStyle="flex justify-center"
          buttonImage=""
          buttonRef="#"
        />
        <Card
          title="DEPILAÇÃO À MÁQUINA"
          subTitle=""
          text="Precisão, conforto e resultado imediato. Técnica profissional que garante remoção de pelos de forma eficaz, deixando a pele lisinha, macia e sem irritações. Um serviço pensado para bem-estar, cuidado e autoestima elevada."
          image={Depilacao}
          alt="Depilação à Máquina"
          style="bg-black border-red-500 border-4 text-slate-200  bg-opacity-80 hover:bg-opacity-100 w-fit mx-2"
          imageStyle="border-b-2 border-red-500 rounded-md size-32 object-cover w-full h-auto"
          id="cards"
          buttonTitle="CONHECER MAIS"
          buttonStyle="bg-red-500  backdrop-blur-sm border border-white border-opacity-50 text-white-500 font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg hover:bg-white hover:text-red-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          actionStyle="flex justify-center"
          buttonImage=""
          buttonRef="#"
        />
      </div>

      <Action
        title={
          <span className="flex items-center gap-3 ">
            <IoLogoWhatsapp
              className=" w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-colors duration-300 group-hover:text-red-500"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold">
              Procura algo específico? Fale Conosco!
            </span>
          </span>
        }
        style={"flex justify-center bg-black p-8"}
        buttonStyle={
          "bg-green-500  backdrop-blur-sm border border-white border-opacity-50 text-white font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg hover:bg-white hover:text-red-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
        }
        href="#contato"
      />
    </div>
  );
};

export default Team;
