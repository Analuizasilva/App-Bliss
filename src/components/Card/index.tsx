interface props {
  children: React.ReactNode;
  class: string;
}

const Card = (props: props) => {
  return (
    <>
      <div className={props.class}>{props.children}</div>
    </>
  );
};

export default Card;
