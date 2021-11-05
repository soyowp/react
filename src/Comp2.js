//클래스형 컴포넌트를 선언하자
import React, { Component } from "react";
// 여기만 봐도 클래스는 노답인걸 알수있다.

class Comp2 extends Component {
  render() {
    //심지어 render까지 사용해야 쓸수있다
    const name = "클래스 그만쓰자.";
    return <div>{name} 알았지?</div>;
  }
}

export default Comp2;
