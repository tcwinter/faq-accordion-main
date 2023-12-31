import logo from './logo.svg';
import background from "./images/background-pattern-desktop.svg";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";
import star from "./images/icon-star.svg";
import './App.css';

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
  return(
    <div className="questions">
      <div className="question-container">What is Frontend Mentor, and how will it help me?<img className="plus" src={plus} alt="NOPE"></img></div>
      <div className="break"></div>
      <div className="question-container">Is Frontend Mentor free?<img className="plus" src={plus}></img></div>
      <div className="break"></div>
      <div className="question-container">Can I use Frontend Mentor projects in my portfolio?<img className="plus" src={plus}></img></div>
      <div className="break"></div>
      <div className="question-container">How can I get help if I'm stuck on a challenge?<img className="plus" src={plus}></img></div>
    </div>
  );
<img src={background} alt="no image ):"></img>
}

function Wrapper(props) {
  return(
    <div className="Wrapper">
      {props.children}
    </div>
  );
}

export default App;
