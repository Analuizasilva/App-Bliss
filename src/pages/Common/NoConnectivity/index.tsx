import "./noConnectivity.css";
import logo from "./wifi_off.svg";

const NoConnectivity = () => {
  return (
    <>
      <p>
        Your Connection was <span id="offline">Offline</span> .
      </p>
      <p>Please check your Wifi Connection.</p>
    </>
  );
};

export default NoConnectivity;
