import PropTypes from "prop-types";

const TextBreaker = (
    { text, wordsPerParagraph }
    ) => {
    if (!text) return [];
    const words = text.split(" ");
    const paragraphs = [];

    for (let i = 0; i < words.length; i += wordsPerParagraph) {
        paragraphs.push(words.slice(i, i + wordsPerParagraph).join(" "));
    }

    return (
        <div>
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 space-x-2 whitespace-pre-line">{paragraph}</p>
                    )
                )
            }
        </div>);
};

TextBreaker.propTypes={
    text: PropTypes.string,
    wordsPerParagraph: PropTypes.number
}
export default TextBreaker
