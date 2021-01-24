import React from 'react';
import CheckBoxQuestion from './Questions/CheckBoxQuestion';
import Home from './Questions/Home';
import { Questions } from './Questions/QuestionsContent';

function Question({questionNumber, setQuestionNumber}) {   
    return (
        <div className="question">
            {
                (Questions[questionNumber]['type'] === "home") ? (
                    <Home questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
                ) : (
                    (Questions[questionNumber]['type'] === "checkbox") ? (
                        <CheckBoxQuestion questionNumber={questionNumber} />
                    ) : (
                        null
                    )
                )
            }
        </div>
    )
}

export default Question