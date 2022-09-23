import { useState } from "react";
import 'animate.css'
import "./styles/App.css";
import Card from "./components/Card";
import CardImage from "./components/CardImage";
import firstSection from "./assets/curated-inspiration 2.png";
import secondSection from "./assets/feedback-illustration.png";
import thirdSection from "./assets/career-consultation 2.png";
import fourthSection from "./assets/portfolio-review 2.png";
import Icon1 from "./assets/Icon1.png";
import Icon2 from "./assets/Icon2.png";
import Icon3 from "./assets/Icon3.png";
import Icon4 from "./assets/Icon4.png";
import Icon5 from "./assets/Icon5.png";

function App() {
  const [dataBase] = useState([{
      sectionIdentifier: "firstSection",
      sectionIcon: Icon1,
      sectionText: "Curated Inspiration",
      hiddenIdentifier: "firstSectionDiv",
      hiddenIcon: Icon5,
      hiddenText: "Get the best inspiration from the best creative talent worldwide.",
    },
    {
      sectionIdentifier: "secondSection",
      sectionIcon: Icon2,
      sectionText: "Feedback Sessions",
      hiddenIdentifier: "secondSectionDiv",
      hiddenIcon: Icon5,
      hiddenText: "Share conversations, learn, inspire and grow together.",
    },
    {
      sectionIdentifier: "thirdSection",
      sectionIcon: Icon3,
      sectionText: "Curated Inspiration",
      hiddenIdentifier: "thirdSectionDiv",
      hiddenIcon: Icon5,
      hiddenText: "Get advised from industry's finest creatives. Schedule a meeting.",
    },
    {
      sectionIdentifier: "fourthSection",
      sectionIcon: Icon4,
      sectionText: "Curated Inspiration",
      hiddenIdentifier: "fourthSectionDiv",
      hiddenIcon: Icon5,
      hiddenText: "Get your portfolio reviewed by industry experienced creators.",
    }
  ])
  
  const [image,setImage] = useState('firstSection')

  function showModal(target) {
    setImage(target.id)
    const allSections         = document.querySelectorAll("section")
    const allSectionsHidden   = document.querySelectorAll(".section__down")
    const imageAnimationReset = document.querySelector(".card__image")

    if(imageAnimationReset.classList.contains("animate__animated")) {
      imageAnimationReset.className = 'card__image'
    } 

    setTimeout(() => {
      imageAnimationReset.className = 'animate__animated animate__fadeIn card__image'
    },0.01)

    allSections.forEach((elem,index) => {
      elem.classList.remove("active")
      if(!allSectionsHidden[index].classList.contains("hidden")) {
        allSectionsHidden[index].classList.add("hidden")
      }
    })
    

    const unHide = document.getElementsByClassName(target.id + "Div");
    const elementUnhide = unHide[0];
    target.classList.toggle("active");
    elementUnhide.classList.toggle("hidden");
  }

  return (
    <div className="App">
      <div className="App__left">
        <Card showModal={showModal} dataBase={dataBase}/>
      </div>

      <div className="App__right">
        {image == "firstSection"  ? <CardImage imageLink={firstSection} /> :
         image == "secondSection" ? <CardImage imageLink={secondSection} /> :
         image == "thirdSection"  ? <CardImage imageLink={thirdSection} /> :
         image == "fourthSection" ? <CardImage imageLink={fourthSection} /> : null}
      </div>
    </div>
  );
}

export default App;

