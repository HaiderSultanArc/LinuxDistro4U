import React from 'react';
import CheckBoxQuestion from './Questions/CheckBoxQuestion';
import Other from './Questions/Other';
import { Questions } from './Questions/QuestionsContent';

function Question({questionNumber, setQuestionNumber}) {   
    return (
        <div className="question">
            {
                (Questions[questionNumber]['type'] === "checkbox") ? (
                    <CheckBoxQuestion questionNumber={questionNumber} />
                ) : (
                    (Questions[questionNumber]['type'] === "other") ? (
                        <Other questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
                    ) : (
                        null
                    )
                )
            }
        </div>
    )
}

export default Question