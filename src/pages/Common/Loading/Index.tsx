import Button from "../../../components/Button";

interface props {
  canShowButton: boolean;
}

const Loading = (props: props) => {
  return (
    <>
      <p>Loading.....</p>
      {props.canShowButton && (
        <Button text="Retry Action" action={() => window.location.reload()} />
      )}
    </>
  );
};

export default Loading;
