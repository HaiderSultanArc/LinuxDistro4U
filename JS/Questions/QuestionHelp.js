import React from 'react'
import { Questions } from './QuestionsContext'

function QuestionHelp({questionNumber}) {
    return (
        <div className="questionHelpBackground">
            <div className="questionHelp">
                {
                    Questions[questionNumber]['help-headings'].map(
                        (heading, headingNumber) => (
                            <div key={`${headingNumber}`} >
                                <h2>{heading}</h2>
                                <p>{Questions[questionNumber]['help-content'][headingNumber]}</p>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default QuestionHelp
