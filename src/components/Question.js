import "./Question.css";

import { useState } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";

const steps = 9;
const questions = [
  "크리스마스라는 말을 들었을 때\n어떤 생각을 더 많이 할까?",
  "크리스마스에 더 보고 싶은 TV 프로는?",
  "크리스마스 파티에 초대받았다.\n어떤 옷을 입고 갈까?",
  "크리스마스 선물을 사러 왔다.\n근데 이거 바가지 같은데...?",
  "크리스마스이브 날이다. 급한 업무가 생겨서 야근을 해야 할 것 같은데…",
  "크리스마스 파티에 요리를 가져가기로 했다.\n이때 나는",
  "크리스마스 파티 날이다.\n어쩌다 보니 내가 주최자가 되었다면",
  "크리스마스 파티에서 새로운 사람을 만났다.\n이때 나는",
  "크리스마스 파티가 끝났다.\n정리가 안 된 거실을 보면",
];
const firstChoices = [
  "다가오는 크리스마스에 뭐 할지 생각한다",
  "특집 예능, 다큐멘터리, 토론, 뉴스, 시사 프로그램 등",
  "단정하고 깔끔하게",
  "온라인에서 동일 상품을 검색해서 가격을 비교해 본다",
  "조금 늦은 퇴근은 어쩔 수 없지... 최대한 빨리 해치운다",
  "인터넷에서 검색한 레시피대로 만든다",
  "어차피 모여서 노는 건데, 대충 먹을 거와 술만 준비해둔다",
  "그 사람이 가지고 있는 어떤 분위기나 특징을 본다",
  "내일은 여기부터 치워야겠네...\n치울 생각부터 한다",
];
const secondChoices = [
  "작년 혹은 재작년 크리스마스를 떠올려본다",
  "특선 영화, 드라마 등",
  "조금 느슨하지만, 개성 넘치게",
  "바가지긴 해도... 선물이니까!\n더 좋은 생각이 없다면 구매한다",
  "최대한 크리스마스 뒤로 미뤄본다",
  "요리는 손맛이지! 나 자신의 방식대로 한다",
  "8시에는 다 같이 촛불 켜고…\n9시에는 캐롤 들어야지! 계획을 세운다",
  "그 사람의 외모나 말씨 등을 자세하게 관찰한다",
  "어제 너무 재밌었지.\n잠깐 멍때리며 파티를 추억한다",
];

const Question = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="Question">
      <MobileStepper
        className="Question-Stepper"
        variant="progress"
        steps={steps}
        position="static"
        activeStep={activeStep}
      />
      <img
        src={`${process.env.PUBLIC_URL}/img/q${activeStep + 1}.jpg`}
        className="Question-Image"
        alt="start"
      />
      <div className="Question-Number">Q{activeStep + 1}.</div>
      <div className="Question-Label">{questions[activeStep]}</div>
      <Button
        className="Question-Choice"
        variant="contained"
        sx={{ marginTop: "10vmin" }}
        onClick={() => {
          if (activeStep >= steps - 1) return;
          setActiveStep(activeStep + 1);
        }}
      >
        {firstChoices[activeStep]}
      </Button>
      <Button
        className="Question-Choice"
        variant="contained"
        sx={{ marginTop: "10vmin" }}
        onClick={() => {
          if (activeStep >= steps - 1) return;
          setActiveStep(activeStep + 1);
        }}
      >
        {secondChoices[activeStep]}
      </Button>
    </div>
  );
};

export default Question;
