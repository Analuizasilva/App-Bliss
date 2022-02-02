import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../../../services/api/api";
import "./share.css";

const Share = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [email, setEmail] = useState("");
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
          data.status != "OK" || email == "" || reg.test(email) === false
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
      <h1>Share page</h1>
      <form>
        <label>
          Email:
          <input
            placeholder="ex: ana@gmail.com"
            type={"email"}
            value={email}
            onInput={(e) => setInpuValue(e)}
          />
        </label>

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            sendEmail();
          }}
        >
          Share
        </button>
      </form>
    </>
  );
};

export default Share;
