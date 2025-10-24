// TextBreaker.jsx
import PropTypes from "prop-types";

const defaultSentenceSplitter = (text) => {
  // try to preserve existing paragraphs first
  const explicitParas = text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  if (explicitParas.length > 1) return explicitParas;

  // otherwise split into sentences (keeps punctuation)
  // regex: split after ., ?, ! followed by whitespace
  const sentences = text
    .replace(/\s+/g, " ") // normalize whitespace
    .split(/(?<=[.?!])\s+/)
    .map(s => s.trim())
    .filter(Boolean);

  return sentences;
};

const TextBreaker = ({ text = "", sentencesPerParagraph = 3, style = "" }) => {
  if (!text) return null;

  const pieces = defaultSentenceSplitter(text);

  // if pieces were explicit paragraphs, return them directly
  const looksLikeExplicitParas = text.includes("\n\n");
  let paragraphs = [];

  if (looksLikeExplicitParas) {
    paragraphs = pieces;
  } else {
    // pieces are sentences — group them into paragraphs
    for (let i = 0; i < pieces.length; i += sentencesPerParagraph) {
      const chunk = pieces.slice(i, i + sentencesPerParagraph).join(" ");
      paragraphs.push(chunk);
    }
  }

  return (
    <div className={style}>
      {paragraphs.map((paragraph, idx) => (
        <p
          key={idx}
          className="mb-3 text-justify leading-relaxed break-words whitespace-normal"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

TextBreaker.propTypes = {
  text: PropTypes.string,
  sentencesPerParagraph: PropTypes.number,
  style: PropTypes.string,
};

export default TextBreaker;
