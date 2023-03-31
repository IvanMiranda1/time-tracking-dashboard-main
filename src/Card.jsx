import "./Card.css";
import ellipsis from './images/icon-ellipsis.svg'

function Card(props) {
  return (
    <div className="fondo">
      <div>
        <div>
          <h2>{props.item.title}s</h2>
          <p>{props.item.frame.current}</p>
        </div>
        <div>
          <button>
            <img src={ellipsis} alt="" />
          </button>
          <p>{props.item.frame.previous}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
