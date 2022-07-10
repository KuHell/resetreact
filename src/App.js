import { useState } from "react";
import "./App.css";

function App() {
  const [blogTit, setblogTit] = useState([
    "react 수련",
    "vue 수련",
    "python 수련",
  ]);
  const [like, setlike] = useState(0);
  const blogtitSet = () => {
    let copy = [...blogTit];
    copy[0] = "react 마스터";
    setblogTit(copy);
  };
  const titSort = () => {
    const sort = [...blogTit];
    setblogTit(sort.sort());
  };
  const [showModal, setshowModal] = useState(false);
  const modalShow = (value) => {
    setshowModal(true);
    settitle(value);
  };
  const [title, settitle] = useState(0);

  return (
    <div className="App">
      <div className="navBar">
        <p className="topTit">KuHell</p>
      </div>
      {blogTit.map(function (i, key) {
        return (
          <div
            className="blogList"
            key={key}
            onClick={() => {
              modalShow(key);
            }}
          >
            <p className="blogTit">{i}</p>
            <p className="blogDate">7월 10일</p>
          </div>
        );
      })}
      {showModal ? <Modal blogTit={blogTit} title={title} /> : null}
      <input onClick={() => {}}></input>
      <button>발행</button>
    </div>
  );
}
function Modal(props) {
  return (
    <div>
      <p>{props.blogTit[props.title]}</p>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  );
}

export default App;
