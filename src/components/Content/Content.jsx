import PropTypes from "prop-types";
import TextBreaker from "./TextBreaker";

const Content = ({
    data,
    hasMedia,
    style,
    titleStyle,
    subTitleStyle,
    listStyle,
    textStyle
}) => {
    return (
        <div className="p-10">
            {data.map((section, index) => (
                <div key={index} className={`flex flex-col p-6 items-center+${style} `}>
                    {hasMedia && section.media && (
                        <div className="mb-4 h relative w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-full">
                            <img src={section.media} alt={section.alt} />
                        </div>
                    )}

                    <h3 className={`capitalize text-4xl items-center p-2 ${titleStyle} `}>
                        {section.title}
                    </h3>
                    {section.subtitle && (
                        <h4 className={`capitalize text-2xl mt-2 items-center p-2${subTitleStyle} `}>
                            {section.subtitle}
                        </h4>
                    )}
                    
                    <ul>
                        {section.list.map((item, index) => { return <li className={listStyle} key={index}>{item}</li> })}
                    </ul>
                    <TextBreaker
                        style={textStyle}
                        text={section.content}
                        wordsPerParagraph={hasMedia ? 150 : 100} />
                </div>
            ))}
        </div>
    );
};

Content.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            media: PropTypes.node,
            title: PropTypes.string,
            list: PropTypes.array,
            links: PropTypes.array,
            content: PropTypes.string
        })).isRequired,
    hasMedia: PropTypes.bool.isRequired,
    style: PropTypes.string,
    titleStyle: PropTypes.string,
    subTitleStyle: PropTypes.string,
    listStyle: PropTypes.string,
    textStyle: PropTypes.string

};
export default Content
