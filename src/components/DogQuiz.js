import React from "react";
import AnswersContainer from "./AnswersContainer";
import StatsContainer from "./StatsContainer";
import "./DogQuiz.css";
import logo from "./../images/dog-api-logo.svg";

export default function(props) {
  return (
    <div className="dog-quiz">
      <div className="dog-quiz-title">
        <img className="dog-quiz-logo" src={logo} alt="logo" />
        <h1>Professor Dog Quiz</h1>
      </div>
      {props.questionType === "pick name" && (
        <img
          className="dog-question-image"
          src={props.image.goodDogUrl}
          id={props.hardmode ? "hard-mode" : "easy-mode"}
          alt="DogBreed"
        />
      )}

      {props.questionType === "pick image" && (
        <h1 className="dog-question-breed" alt="DogBreed">
          Select the picture of breed "{props.image.goodDog}"
        </h1>
      )}

      {props.questionType === "pick name" && (
        <div className="answers">
          <AnswersContainer
            seenDogs={props.seenDogs}
            mixedArray={props.mixedArray}
            image={props.image}
            name={props.image.goodDog}
            badDog1={props.image.badDog1}
            badDog2={props.image.badDog2}
            questionType={props.questionType}
          />
          <StatsContainer />
        </div>
      )}

      {props.questionType === "pick image" && (
        <div className="answers-pictures">
          <AnswersContainer
            seenDogs={props.seenDogs}
            mixedArray={props.mixedArray}
            image={props.image}
            name={props.image.goodDog}
            badDog1={props.image.badDog1}
            badDog2={props.image.badDog2}
            questionType={props.questionType}
          />
          <StatsContainer />
        </div>
      )}
    </div>
  );
}
