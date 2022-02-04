import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../../services/api/api";

const ShareInfo = () => {
  const [email, setEmail] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  function sendEmail() {
    api
      .post(
        `share?destination_email=${email}&content_url=${searchParams.get(
          "contentUrl"
        )}`
      )
      .then(({ data }) => {
        {
          data.status !== "OK" || email === "" || reg.test(email) === false
            ? alert("Ops... we had an error")
            : alert("Email Sent");
        }
      });
  }
  function setInpuValue(e: any) {
    setEmail(e.target.value);
  }
  return (
    <>
      <h1>
        Share email <FontAwesomeIcon icon={faEnvelope} />
      </h1>
      <p>Enter email to share question details.</p>
      <form>
        <label>
          Email:
          <input
            placeholder="ex: ana@gmail.com"
            required
            type={"email"}
            value={email}
            onInput={(e) => setInpuValue(e)}
          />
        </label>

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            email && sendEmail();
          }}
        >
          Share
        </button>
      </form>
    </>
  );
};

export default ShareInfo;
