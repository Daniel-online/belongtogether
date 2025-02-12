
import PropTypes from "prop-types"
import TextBreaker from "./TextBreaker"

const Cards = ({cardData, style}) => {
    const basicStyle="bg-red-500 transform hover:scale-105 drop-shadow-md transition delay-100 hover:drop-shadow-2xl p-4 rounded-xl flex flex-col items-center w-1/4 h-auto "
  return (
    <>
      {cardData.map(
        (card, index) => {
          return (
            <div key={index} className={basicStyle}>
              <img
                className="rounded-lg bg-cover w-auto h-auto "
                src={card.image}
                alt={card.alt} />
              <h3 className="font-bold" >
                {card.title}
              </h3>
              <h5 className="font-semibold">
                {card.subTitle}
              </h5>
              <TextBreaker 
              text={card.description}
              wordsPerParagraph={50}
              />
            </div>
          )
        }
      )
      }
    </>
  )
}
Cards.propTypes={
  cardData: PropTypes.array,
  style: PropTypes.string
}
export default Cards
