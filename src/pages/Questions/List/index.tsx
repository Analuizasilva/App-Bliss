import "./list.css";
import { useEffect, useState } from "react";
import api from "../../../services/api/api";
import Question from "../../../models/question";
import Card from "../../../components/Card";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import QuestionInfo from "../../../components/ComponentsInfo/QuestionInfo/questionInfo";
import Loading from "../../Common/Loading";

const List = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  let [offset, setOffset] = useState<number>(0);
  let [hasMore, setHasMore] = useState<boolean>(true);

  const fakeLimit = 2;

  useEffect(() => {
    getQuestions().then((questions) => setQuestions(questions));
  }, []);

  const getQuestions = (offset = 0) => {
    return api.get(`questions?limit=10&offset=${offset}`).then(({ data }) => {
      return data as Question[];
    });
  };
  const fetchMore = () => {
    if (fakeLimit === offset) {
      setHasMore(false);
    }
    offset++;
    setOffset(offset);
    getQuestions(offset).then((newQuestions) =>
      setQuestions([...questions, ...newQuestions])
    );
  };

  const navigate = useNavigate();

  return (
    <div className="list">
      <h1>Questions</h1>
      {questions.length > 0 ? (
        <InfiniteScroll
          dataLength={questions.length}
          next={fetchMore}
          hasMore={hasMore}
          loader={<Loading />}
          endMessage={<b>Yay! You have seen it all</b>}
        >
          <div className="container">
            {questions.map((question) => (
              <div
                key={question.id + offset * fakeLimit}
                onClick={() => navigate(`/questions/${question.id}`)}
              >
                <Card
                  class="cardList"
                  children={
                    <QuestionInfo
                      image={question.thumb_url}
                      title={question.question}
                      date={question.published_at}
                    />
                  }
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      ) : null}
    </div>
  );
};

export default List;
