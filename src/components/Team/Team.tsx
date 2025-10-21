import PropTypes from "prop-types";
import Cards from "../Content/Cards";
import buttonRef from "./../../Data/buttonRef.json";

const Team = ({ data, title, titleStyle, style }) => {
    return (
        <div>
            <div className={titleStyle}>
                <h3>
                    {title}
                </h3>
            </div>
            <div className={style}>
                <Cards
                    cardData={data}
                    style={'bg-black border-red-500 border-4 text-slate-200 min-h-full bg-opacity-80 hover:bg-opacity-100 w-80 mx-2'}
                    imageStyle={'border-b-2 border-red-500 rounded-md size-32 object-cover w-full h-auto'}
                    id={'cards'}
                    buttonTitle={'AGENDAR'}
                    // Updated button style with the glassmorphism effect
                    buttonStyle={'bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-50 text-red-500 font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg'}
                    actionStyle={'flex justify-center'}
                    buttonImage={''}
                    buttonRef={buttonRef}
                />
            </div>
        </div>
    )
}

export default Team