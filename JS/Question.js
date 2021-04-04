import React from 'react';
import LinuxDistro4UPredictor from './LinuxDistro4UPredictor/LinuxDistro4UPredictor';
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
                        (Questions[questionNumber]['type'] === 'other') ? (
                            <Other questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
                        ) : (
                            <LinuxDistro4UPredictor questionNumber={questionNumber} inputFeatures={inputFeatures}/>
                        )
                    )
                )
            }
        </div>
    )
}

export default Question