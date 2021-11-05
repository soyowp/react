import { Fragment } from "react/cjs/react.production.min";
import "./Test.css";
const Test = () => {
  const name = undefined;
  const style = {
    //css도 이런식으로 가능! 문법에 주의합시다.
    backgroundColor: "red", //이전 css와 문법이 다르다 -가 사라지고 중간이 대문자
    color: "aqua",
    fontSize: "50px",
    fontWeight: "bold",
  };

  // return { name }; 이건 안돼요

  return (
    <Fragment>
      <div>{name || "이러면 undefined라도 출력가능!"}</div>
      <div style={style}>css도 이렇게 편하게 써져요!</div>
      {/*물론 태그 안에 style={css조건} 이런식으로도 사용이 가능하지만
        굳이 그렇게 써야할 필요가?*/}
      <div className="testCss">이러면 css파일에서 불러와져쓰</div>
      {/*외부 css파일을 불러올때는import 후 className으로 불러온다 이거 완전 JS아니냐????
    className 대신 class로 사용가능하지만 브라우저콘솔에 경고창이 뙇.*/}
    </Fragment>
  );
};

export default Test;
