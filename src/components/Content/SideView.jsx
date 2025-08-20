
import PropTypes from "prop-types";

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
        <div className={`flex ${sideDirection ? 'justify-start' : 'justify-end'} w-full h-auto`}>
            {sideDirection ? (
                <div className={`flex w-full ${sectionStyle}`}>
                    {/* Text on Left */}
                    <div className={`w-1/2 p-4 ${sectionStyle}`}>
                        {isSectionTitle && (
                            <h2 className={`text-3xl font-bold uppercase tracking-wide text-center drop-shadow-md ${titleStyle}`}>
                                {sectionTitle}
                            </h2>
                        )}
                        {/* <p className={`text-xl font-bold uppercase tracking-wide text-center drop-shadow-md ${textStyle}`}>{text}</p> */}
                        <div className="mt-4 space-y-4">
                            {text.split("\n").map((paragraph, idx) => (
                                <p
                                    key={idx}
                                    className={`text-xl font-bold uppercase tracking-wide text-center drop-shadow-md ${textStyle}`}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className="mt-4">
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Nível de Relaxamento</p>
                            <div className="flex gap-3 ml-0">
                                {levels.map((level, index) => (
                                    <span
                                        key={index}
                                        className={`px-4 py-1 rounded-full border shadow-sm text-sm font-medium transition 
                                            ${therapyLevel === index
                                                ? "bg-red-500 text-white border-pink-500"
                                                : "bg-white text-gray-600 border-gray-300"
                                            }`}
                                    >
                                        {level}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image on Right → rounded-left */}
                    <div className="w-1/2">
                        <img
                            src={image}
                            alt={sectionTitle}
                            className={`${imageStyle} rounded-l-3xl`}
                        />
                    </div>
                </div>
            ) : (
                <div className={`flex w-full ${sectionStyle}`}>
                    {/* Image on Left → rounded-right */}
                    <div className="w-1/2">
                        <img
                            src={image}
                            alt={sectionTitle}
                            className={`${imageStyle} rounded-r-3xl`}
                        />
                    </div>

                    {/* Text on Right */}
                    <div className={`w-1/2 p-4`}>
                        {isSectionTitle && (
                            <h2 className={`text-3xl font-bold uppercase tracking-wide text-center drop-shadow-md ${titleStyle}`}>
                                {sectionTitle}
                            </h2>
                        )}
                        {/* <p className={`text-xl font-bold uppercase tracking-wide text-center drop-shadow-md ${textStyle}`}>{text}</p> */}
                        <div className="mt-4 space-y-4">
                            {text.split("\n").map((paragraph, idx) => (
                                <p
                                    key={idx}
                                    className={`text-xl font-bold uppercase tracking-wide text-center drop-shadow-md ${textStyle}`}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className="mt-4">
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Nível de Relaxamento</p>
                            <div className="flex gap-3 ml-0">
                                {levels.map((level, index) => (
                                    <span
                                        key={index}
                                        className={`px-4 py-1 rounded-full border shadow-sm text-sm font-medium transition 
                                            ${therapyLevel === index
                                                ? "bg-red-500 text-white border-pink-500"
                                                : "bg-white text-gray-600 border-gray-300"
                                            }`}
                                    >
                                        {level}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
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
