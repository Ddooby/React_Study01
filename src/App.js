import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // jsx 중괄호 문법 - 데이터 바인딩
  const sVal = "리엑트를 배워보자!";
  let [title, titleFunc] = useState(['제목1','제목2']);
  let [like, likeFunc] = useState([0,0]);

  // span 태그 onClick = {} 안에는 함수이름만 들어갈 수 있다.
  // 아니면 onClick = { () => { 로직 }} 은 가능하다.
  function fnClickLike() {
    // state 변경

    // 방법1
    // let sLike = like[0];
    // likeFunc([sLike+1,like[1]]);

    // 방법2 
    // 음... 왜 안될까...
    // state 가 array 일 때는 방법 1만 되나?
    // like == copy 이기 때문에 state 가 변경이 안일어났다고 생각하고 적용 안된다.
    // let copy = like; => let copy = [...like]; 으로 하면 된다.

    let copy = [...like];
    copy[0] = copy[0]+1;
    likeFunc(copy);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!!<br/>
        </a>
        {sVal}<br/>
        <div>{title[0]} <span onClick={ fnClickLike }>👍</span> {like[0]}</div>
        <div>{title[1]} <span>👍</span> {like[1]}</div>

        <SampleComponent/>
      </header>
    </div>
  );
}

function SampleComponent() {
  return (
    // 의미없는 태그 HTML 태그 병렬로 쓸 수 없기에 통으로 묶어줄 수 있는 태그
    <>
    <div>
      컴포넌트 자리
    </div>
    </>
  )
}

export default App;