const Proptest = (props) => {
  return (
    <div>
      이게바로 프롭인데 {props.name}을 쓸수있어유
      <br />
      그런데이제 {props.children}을 곁들인
    </div>
  );
};
Proptest.defaultProps = {
  name: "이거는 디폴트 프롭값",
};
export default Proptest;
