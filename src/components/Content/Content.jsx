import PropTypes from "prop-types";
import TextBreaker from "./TextBreaker";

const Content = ({ data, hasMedia }) => {
    return (
        <>
            {data.map((section, index) => (
                <div key={index} className="flex flex-col p-10 items-center ">
                    {hasMedia && section.media && (
                        <div className="mb-4 h relative w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-full">
                            <img src={section.media} alt={section.alt} />
                        </div>
                    )}

                    <h3 className="capitalize text-4xl items-center p-2">
                        {section.title}
                    </h3>
                    {section.subtitle && (
                        <h4 className="capitalize text-2xl mt-2 items-center p-2">
                            {section.subtitle}
                        </h4>
                    )}
                    <ul>
                        {section.list.map((item, index) => { return <li key={index}>{item}</li> })}
                    </ul>
                    <TextBreaker text={section.content} wordsPerParagraph={hasMedia ? 100 : 40} />
                </div>
            ))}
        </>
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
    hasMedia: PropTypes.bool.isRequired
};
export default Content
Content.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            media: PropTypes.node,
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string, // Optional subtitle property
            list: PropTypes.array,
            links: PropTypes.array,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
    hasMedia: PropTypes.bool.isRequired,
};