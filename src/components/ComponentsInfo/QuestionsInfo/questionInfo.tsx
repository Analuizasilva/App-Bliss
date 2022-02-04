interface props {
  title: string;
  date: string;
  image: string;
}

const QuestionInfo = (props: props) => {
  return (
    <>
      <img src={props.image} alt="Avatar" />
      <h4>
        <b>{props.title.toLocaleUpperCase()}</b>
      </h4>
      <p>Published at: {new Date(props.date).toLocaleDateString()}</p>
    </>
  );
};

export default QuestionInfo;
