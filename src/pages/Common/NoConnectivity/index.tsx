import logo from "../../../assets/images/wifi-logo.png";

const NoConnectivity = () => {
  return (
    <>
      <img src={logo} />
      <p>
        Your Connection was
        <strong> Offline</strong>.
      </p>
      <p>Please check your Wifi Connection.</p>
    </>
  );
};

export default NoConnectivity;
