import React from 'react';
import CheckBoxQuestion from './Questions/CheckBoxQuestion';
import Other from './Questions/Other';
import { Questions } from './Questions/QuestionsContext';
import YesNoQuestion from './Questions/YesNoQuestion';

function Question({questionNumber, setQuestionNumber, inputFeatures, setInputFeatures, inputFeaturesIndex}) {
    return (
        <div className="question">
            {
                (Questions[questionNumber]['type'] === "checkbox") ? (
                    <CheckBoxQuestion 
                        questionNumber={questionNumber} 
                        inputFeatures={inputFeatures} 
                        setInputFeatures={setInputFeatures}
                        inputFeaturesIndex={inputFeaturesIndex}
                    />
                ) : (
                    (Questions[questionNumber]['type'] === "yesNo") ? (
                        <YesNoQuestion 
                            questionNumber={questionNumber} 
                            inputFeatures={inputFeatures} 
                            setInputFeatures={setInputFeatures} 
                            inputFeaturesIndex={inputFeaturesIndex}
                        />
                    ) : (
                        <Other questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
                    )
                )
            }
            
            {
                console.log("TEST {\ninputFeaturesIndex: ", inputFeaturesIndex, "\ninputFeatures: ", inputFeatures, "\n}")
            }
        </div>
    )
}

export default Question