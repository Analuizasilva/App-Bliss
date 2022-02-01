import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import api from "../../../services/api/api";
import "./share.css";

const Share = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [email, setEmail] = useState("");

  function sendEmail() {
    api
      .post(
        `share?destination_email=${email}&content_url=${searchParams.get(
          "contentUrl"
        )}`
      )
      .then(({ data }) => {
        {
          data.status == "OK"
            ? alert("Email Sent")
            : alert("Ops... we had an error");
        }
      });
  }

  function setInpuValue(e: any) {
    setEmail(e.target.value);
  }

  return (
    <>
      <h1>Share page</h1>
      <Breadcrumb path="/" text="Question" />
      <form>
        <label>
          Email:
          <input
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

export default Share;
