import { useLocation } from "react-router-dom";

import "./Result.css";

const data = [
  {
    title: "배드 맘스 크리스마스",
    link: "https://m.kinolights.com/title/63166",
  },
  {
    title: "크리스마스 건너뛰기",
    link: "https://m.kinolights.com/title/38833",
  },
  { title: "크리스마스 스피릿", link: "https://m.kinolights.com/title/104135" },
  { title: "클라우스", link: "https://m.kinolights.com/title/78612" },
  { title: "저스트 프렌드", link: "https://m.kinolights.com/title/44382" },
  {
    title: "팀 버튼의 크리스마스 악몽",
    link: "https://m.kinolights.com/title/37091",
  },
  { title: "캐롤", link: "https://m.kinolights.com/title/10157" },
  { title: "라스트 홀리데이", link: "https://m.kinolights.com/title/28092" },
];

const Result = () => {
  const location = useLocation();
  const id = +location.pathname.split("/")[2];

  return (
    <div>
      <div>당신의 크리스마스 영화는,</div>
      <div>{`${data[id].title}`}</div>
    </div>
  );
};

export default Result;
