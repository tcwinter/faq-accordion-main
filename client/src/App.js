import logo from './logo.svg';
import background from "./images/background-pattern-desktop.svg";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";
import star from "./images/icon-star.svg";
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <>
      <Page>
        <Image />
          <Wrapper>
            <MainCard>
              <CardHeading />
              <Questions />
            </MainCard>
          </Wrapper>
      </Page>
    </>  
  );
}

function Page(props) {
  return(
    <div className="Page">
      {props.children}
    </div>
  );
}

function Image() {
  return(
    <img className="background" src={background} alt="no image ):"></img>
  );
}

function MainCard(props) {
  return (
    <div className="MainCard">
      {props.children}
    </div>
  );
}

function CardHeading() {
  return(
    <div className="heading">
      <tr>
        <td className="move-over"><img className="star" src={star}></img></td>
        <td><h1>FAQs</h1></td>
      </tr>
    </div>
  );
}

function Questions() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [img, setImg] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const [img4, setImg4] = useState(false);

  return(
    <div className="questions">
      <div className="question-container" onClick={() => setShow(currentShow => !currentShow)}>What is Frontend Mentor, and how will it help me?<img className="plus" onClick={() => setImg(currentImg => !currentImg)} src={img ? minus : plus} alt="NOPE"></img></div>
        { img ? <Answer ans="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building." /> : null}
      <div className="break"></div>
      <div className="question-container" onClick={() => setShow2(currentShow => !currentShow)}>Is Frontend Mentor free?<img className="plus" onClick={() => setImg2(currentImg => !currentImg)} src={img2 ? minus : plus}></img></div>
        { img2 ? <Answer2 /> : null}
      <div className="break"></div>
      <div className="question-container" onClick={() => setShow3(currentShow => !currentShow)}>Can I use Frontend Mentor projects in my portfolio?<img className="plus" onClick={() => setImg3(currentImg => !currentImg)} src={img3 ? minus : plus}></img></div>
        { img3 ? <Answer3 /> : null}
      <div className="break"></div>
      <div className="question-container"onClick={() => setShow4(currentShow => !currentShow)}>How can I get help if I'm stuck on a challenge?<img className="plus" onClick={() => setImg4(currentImg => !currentImg)} src={img4 ? minus : plus}></img></div>
        { img4 ? <Answer4 /> : null}
    </div>
  );
}

const Answer = props => <p>{props.ans}</p>;

const Query = props => <div>{props.q}</div> 

function Answer1() {
  return(
    <p>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.</p>
  );
}

function Answer2() {
  return(
    <p>Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.</p>
  );
}

function Answer3() {
  return(
    <p>Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!</p>
  );
}

function Answer4() {
  return(
    <p>The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.</p>
  );
}

function Wrapper(props) {
  return(
    <div className="Wrapper">
      {props.children}
    </div>
  );
}

export default App;
