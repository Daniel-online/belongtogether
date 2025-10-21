import PropTypes from "prop-types";
import Paragraph from "./Paragraph";

const SideView = ({
    isSectionTitle,
    sectionTitle,
    sectionStyle,
    sideDirection,
    text,
    textStyle,
    titleStyle,
    therapyLevel,
    image,
    imageStyle
}) => {
    const levels = ["BÁSICO", "MÉDIO", "ALTO"];

    return (
        <div className={`w-full h-auto ${sectionStyle}`}>
            {/* Mobile Layout - Always stacked vertically */}
            <div className="flex flex-col lg:hidden">
                {/* Image on Top for Mobile */}
                <div className="w-full">
                    <img
                        src={image}
                        alt={sectionTitle}
                        className={`${imageStyle} w-full h-auto object-cover rounded-t-3xl`}
                        loading="lazy"
                    />
                </div>
                
                {/* Text on Bottom for Mobile */}
                <div className="w-full p-4">
                    <Paragraph
                        title={sectionTitle}
                        text={text}
                        titleStyle={titleStyle}
                        textStyle={textStyle}
                    />
                </div>
            </div>

            {/* Desktop Layout - Side by side */}
            <div className={`hidden lg:flex w-full ${sideDirection ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Text Section */}
                <div className="w-full lg:w-1/2 p-6 flex items-center">
                    <div className="w-full">
                        <Paragraph
                            title={sectionTitle}
                            text={text}
                            titleStyle={titleStyle}
                            textStyle={textStyle}
                        />
                        
                        {/* Therapy Level - Only show if provided */}
                        {therapyLevel !== undefined && (
                            <div className="mt-6">
                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                    Nível de Relaxamento
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {levels.map((level, index) => (
                                        <span
                                            key={index}
                                            className={`px-3 py-1 rounded-full border shadow-sm text-sm font-medium transition 
                                                ${therapyLevel === index
                                                    ? "bg-red-500 text-white border-white"
                                                    : "bg-white text-gray-600 border-gray-300"
                                                }`}
                                        >
                                            {level}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={image}
                        alt={sectionTitle}
                        className={`${imageStyle} w-full h-full object-cover ${
                            sideDirection 
                                ? 'rounded-l-3xl' 
                                : 'rounded-r-3xl'
                        }`}
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

SideView.propTypes = {
    isSectionTitle: PropTypes.bool,
    sectionTitle: PropTypes.string,
    sectionStyle: PropTypes.string,
    sideDirection: PropTypes.bool, // true = image right, false = image left
    text: PropTypes.string,
    textStyle: PropTypes.string,
    titleStyle: PropTypes.string,
    therapyLevel: PropTypes.number,
    image: PropTypes.string,
    imageStyle: PropTypes.string
};

export default SideView;