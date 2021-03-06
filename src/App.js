import { Fragment } from "react/cjs/react.production.min";

const App = () => {
  // 이렇게 펑션 내부 리턴값에 html이 들어있는 형태를 JSX라고 한다.
  const name = "리액트"; // 물론 자바스크립트처럼 표현도 가능하다.
  return (
    // <h1>드디어 리액트입니다.</h1>
    // <h2>진짜 프론트엔드 하고싶어요...</h2>
    // 요따구로 작성하면 하나의 부모가 아니기때문에 문법 오류이다.
    // 따라서 아래처럼 작성해주자
    // 리액트에서 지원하는 Fragment라는 컴포넌트 이용이 가능하다 <></>로도 표현 가능
    <Fragment>
      <h1>드디어 {name}입니다</h1>
      <h2>프론트엔드 개발자좀 시켜주세요...</h2>

      {name === "리액트" ? (
        <h1>이거슨 리액트에요!</h1>
      ) : (
        <h2>이건 리액트가 아닌데요??</h2>
      )}
    </Fragment>
    //아주 잘되는걸 볼 수 있다.
    //변수로 선언한건 {}안에 넣어서 표현.
    //if문 대신 조건부 연산도 가능하다.
  );
};

export default App;
