import React from 'react';
import CheckBoxQuestion from './Questions/CheckBoxQuestion';
import Other from './Questions/Other';
import { Questions } from './Questions/QuestionsContent';
import YesNoQuestion from './Questions/YesNoQuestion';

function Question({questionNumber, setQuestionNumber}) {   
    return (
        <div className="question">
            {
                (Questions[questionNumber]['type'] === "checkbox") ? (
                    <CheckBoxQuestion questionNumber={questionNumber} />
                ) : (
                    (Questions[questionNumber]['type'] === "yesNo") ? (
                        <YesNoQuestion questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
                    ) : (
                        <Other questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
                    )
                )
            }
        </div>
    )
}

export default Question