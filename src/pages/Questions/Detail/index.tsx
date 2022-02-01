import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import Question from "../../../models/question";
import api from "../../../services/api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";

const Detail = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState<Question>();
  const { id } = useParams();

  useEffect(() => {
    api.get(`questions/${id}`).then(({ data }) => {
      setQuestion(data as Question);
    });
  }, []);

  return (
    <>
      <h1>Question Detail</h1>

      <Breadcrumb path="/" text="Question" />
      {question ? (
        <div>
          <h3>{question.question}</h3>
          <img src={question.image_url} />
          <p>
            <strong>Published at: </strong>
            {new Date(question.published_at).toLocaleDateString()}
          </p>
          <p>
            <strong>Id:</strong> {question.id}
          </p>
          {question.choices.map((choice, index) => (
            <ul key={index}>
              <li>
                {choice.choice} - {choice.votes} votes
                <button>
                  <FontAwesomeIcon color="green" icon={faCheck} />
                </button>
              </li>
            </ul>
          ))}
          <Button
            text="Share"
            action={() => navigate(`/share?contentUrl=${window.location.href}`)}
          />
        </div>
      ) : null}
    </>
  );
};

export default Detail;
