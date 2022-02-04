import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Question from "../../../models/question";
import api from "../../../services/api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faShareAltSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";
import "./detail.css";

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
    <div className="detail">
      <h1>Question Detail</h1>
      <nav>
        <Link to={"/questions"}>Questions</Link>
      </nav>
      {question ? (
        <div>
          <div>
            Share{" "}
            <FontAwesomeIcon
              size="lg"
              onClick={() =>
                navigate(`/share?contentUrl=${window.location.href}`)
              }
              icon={faShareAltSquare}
            />
          </div>

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
                <button onClick={() => vote(choice)}>
                  vote <FontAwesomeIcon color="green" icon={faCheck} />
                </button>
              </li>
            </ul>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Detail;
