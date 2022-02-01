import "./card.css";

interface props {
  title: string;
  date: string;
  image: string;
}

const Card = (props: props) => {
  return (
    <>
      <div className="card-header">
        <img src={props.image} alt="Avatar" />
        <div className="card-body">
          <h4>
            <b>{props.title.toLocaleUpperCase()}</b>
          </h4>
          <p>Published at: {new Date(props.date).toLocaleDateString()}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
