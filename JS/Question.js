import React, { useContext } from 'react';
import CheckBoxQuestion from './Questions/CheckBoxQuestion';
import Other from './Questions/Other';
import { InputFeaturesContext, InputFeaturesIndexContext, Questions } from './Questions/QuestionsContent';
import YesNoQuestion from './Questions/YesNoQuestion';

function Question({questionNumber, setQuestionNumber}) {
    const [inputFeatues, setInputFeatures] = useContext(InputFeaturesContext);
    const [inputFeaturesIndex, setInputFeaturesIndex] = useContext(InputFeaturesIndexContext);
    
    return (
        <div className="question">
            {
                (Questions[questionNumber]['type'] === "checkbox") ? (
                    <CheckBoxQuestion 
                        questionNumber={questionNumber} 
                        inputFeatures={inputFeatues} 
                        setInputFeatures={setInputFeatures}
                        inputFeaturesIndex={inputFeaturesIndex}
                        setInputFeaturesIndex={setInputFeaturesIndex} 
                    />
                ) : (
                    (Questions[questionNumber]['type'] === "yesNo") ? (
                        <YesNoQuestion 
                            questionNumber={questionNumber} 
                            inputFeatures={inputFeatues} 
                            setInputFeatures={setInputFeatures} 
                            inputFeaturesIndex={inputFeaturesIndex}
                            setInputFeaturesIndex={setInputFeaturesIndex}
                        />
                    ) : (
                        <Other questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
                    )
                )
            }
        </div>
    )
}

export default Question