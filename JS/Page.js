import React, { useContext } from 'react';
import ArcIon from './ArcIon';
import Header from './Header';
import { InputFeaturesContext, InputFeaturesIndexContext } from './InputFeaturesContext';
import Question from './Question';
import { QuestionContext } from './Questions/QuestionsContext';

function Page() {
    const [questionNumber, setQuestionNumber] = useContext(QuestionContext);
    const [inputFeatures, setInputFeatures] = useContext(InputFeaturesContext);
    const [inputFeaturesIndex, setInputFeaturesIndex] = useContext(InputFeaturesIndexContext);
    
    return (
        <div className="page">
            <div className="page__header">
                <Header questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} inputFeaturesIndex={inputFeaturesIndex} setInputFeaturesIndex={setInputFeaturesIndex} />
            </div>
            
            <div className="page__question">
                <Question questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} inputFeatures={inputFeatures} setInputFeatures={setInputFeatures} inputFeaturesIndex={inputFeaturesIndex}/>
            </div>
            
            <div className="page__arcIon">
                <ArcIon questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
            </div>
            
            <h1 className="page__branding">LinuxDistro4U Powerd by ArcCode</h1>
        </div>
    )
}

export default Page
