interface props {
  title: string;
  date: string;
  image: string;
  class?: string;
}

const QuestionInfo = (props: props) => {
  return (
    <>
      <div className={props.class}>
        <img src={props.image} alt="QuestionImage" />
        <h4>
          <b>{props.title.toLocaleUpperCase()}</b>
        </h4>
        <p>
          <strong>Published at: </strong>
          {new Date(props.date).toLocaleDateString()}
        </p>
      </div>
    </>
  );
};

export default QuestionInfo;
