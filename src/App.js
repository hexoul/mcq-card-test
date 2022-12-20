import "./App.css";

const App = () => {
  return (
    <div className="App">
      <img
        src="https://doda-static.com/img/600/65/1/1/1635922598145-0488440.png"
        className="App-LogoImage"
        alt="logo"
      />
      <div class="App-Title">나와 잘 맞는 크리스마스 캐롤은?</div>
      <div class="App-Subtitle">
        <b>유니버설 뮤직 코리아 x 트렌드어워드</b>
        <br />
        찰떡 같은 캐롤을 추천해드립니다!
      </div>
      <img
        src="https://doda-static.com/img/900/80/1/1/1636617853966-0117112.jpg"
        className="App-StartImage"
        alt="start"
      />
      <button
        className="App-StartButton"
      >
        테스트 시작하기
      </button>
    </div>
  );
};

export default App;
