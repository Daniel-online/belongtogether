import PropTypes from "prop-types"

const Column = ({
  title,
  list,
  links }//crie um objeto que permita passar os itens em lista
) => {
  //crie um mapping de cada item de 'list' e associe a uma variavel
  // console.log(list.map((item, index) => { item, index }));
  return (
    <div className="text-violet-900 font-semibold">
      <h3 className=" capitalize d text-lg">{title}</h3>
      <ul>
        {list.map((item, index) => (
          //mapa listado dos items
          <li key={index}>
            <a href={links[index]}>{item}</a>
          </li>
        )
        )
        }

      </ul>
    </div>
  )
}

Column.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  links: PropTypes.array
}
export default Column
