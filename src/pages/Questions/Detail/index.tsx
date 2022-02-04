import "./detail.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Question from "../../../models/question";
import api from "../../../services/api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../../components/Card";
import {
  faCheck,
  faChevronCircleLeft,
  faShareAltSquare,
} from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState<Question>();
  const { id } = useParams();

  useEffect(() => {
    api.get(`questions/${id}`).then(({ data }) => {
      setQuestion(data as Question);
    });
  }, []);

  function vote(choice: any) {
    api.put(`questions/${id}`, question).then(({ data }) => {});
    choice.votes++;
    setQuestion({ ...question } as Question);
    return question;
  }

  return (
    <>
      <h1>Detail</h1>

      <Card class="cardDetail">
        {question ? (
          <div className="box">
            <div className="image">
              <img alt="questionImage" src={question.image_url} />
            </div>
            <div className="data">
              <h3>{question.question}</h3>
              <p>
                <strong>Published at: </strong>
                {new Date(question.published_at).toLocaleDateString()}
              </p>
              <p>
                <strong>Id:</strong> {question.id}
              </p>
            </div>
            <div className="choices">
              {question.choices.map((choice, index) => (
                <p key={index}>
                  <button onClick={() => vote(choice)}>
                    <strong>{choice.choice} </strong> - {choice.votes} votes{" "}
                    <FontAwesomeIcon color="green" icon={faCheck} />
                  </button>
                </p>
              ))}
            </div>
          </div>
        ) : null}
      </Card>
      <div className="nav">
        <div>
          <Link className="link" to={"/questions"}>
            <FontAwesomeIcon size="sm" icon={faChevronCircleLeft} />
            Back to Questions
          </Link>
        </div>
        <div
          className="share"
          onClick={() => navigate(`/share?contentUrl=${window.location.href}`)}
        >
          Share <FontAwesomeIcon size="lg" icon={faShareAltSquare} />
        </div>
      </div>
    </>
  );
};

export default Detail;
