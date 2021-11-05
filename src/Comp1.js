//컴포넌트를 선언하는 방법은
//함수형과 클래스형이 있다.
//함수형을 쓸것이기 때문에 클래스는 뭔지만 알고 갑시다.

const Comp1 = () => {
  const name = "함수형 컴포넌트!";
  return <div>이것은 {name}</div>;
};

export default Comp1;
