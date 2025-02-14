import PropTypes from "prop-types"
import Cards from "../Content/Cards"
const Team = ({ data, title, titleStyle, style }) => {
    return (
        <div>
            <div  className={titleStyle}>
                <h3>
                    {title}
                </h3>
            </div>
            <div className={style}>
                <Cards
                    cardData={data}
                    style={'space-y-1 bg-yellow-600 border-yellow-500 border-4  font-semibold text-slate-200 text-border min-h-full bg-white bg-opacity-80 hover:bg-opacity-100 w-64 '}
                    imageStyle={'border-8 border-violet-700 rounded-full size-32 object-cover'}
                />
            </div>
        </div>
    )
}
Team.propTypes = {
    data: PropTypes.object,
    style: PropTypes.string,
    title: PropTypes.string,
    titleStyle: PropTypes.string

}
export default Team
