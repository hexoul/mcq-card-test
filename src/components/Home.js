import "./Home.css";

import { useCallback, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import Question from "./Question";

const Home = () => {
  const [start, setStart] = useState(false);
  const doStart = useCallback(() => setStart(true), []);

  return start ? (
    <Question />
  ) : (
    <div className="Home">
      <img
        src={`${process.env.PUBLIC_URL}/logo512.png`}
        className="Home-LogoImage"
        alt="logo"
      />
      <div className="Home-Title">크리스마스 영화 테스트</div>
      <div className="Home-Subtitle">나와 잘 맞는 크리스마스 영화는?🎄</div>
      <img
        src={`${process.env.PUBLIC_URL}/img/start-image.jpg`}
        className="Home-StartImage"
        alt="start"
      />
      <IconButton
        className="Home-StartButton"
        sx={{
          color: "black",
          backgroundColor: "white",
          borderRadius: "10px",
          fontSize: "large",
          fontFamily: "GangwonEdu_OTFBoldA",
          boxShadow: "rgba(255, 255, 255, 0.34) 0px 5px 20px",
        }}
        onClick={doStart}
        disableRipple
      >
        <ChevronRightIcon />
        테스트 시작하기
      </IconButton>
    </div>
  );
};

export default Home;
