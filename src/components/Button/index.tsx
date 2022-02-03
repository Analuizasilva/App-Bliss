interface props {
  text: any;
  action?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = (props: props) => {
  return (
    <>
      <button type="button" onClick={props.action}>
        {props.text}
      </button>
    </>
  );
};

export default Button;
