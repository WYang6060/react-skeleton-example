import "./Item.css";

const Item = (props) => {
  return (
    <li className="item">
      <div>
        <img className="item-img" src={props.avatar} alt="" />
      </div>
      <div className="item-info">
        <p>
          <strong>
            {props.first_name} {props.last_name}
          </strong>
        </p>
        <p>{props.email}</p>
      </div>
    </li>
  );
};

export default Item;
