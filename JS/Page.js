import React, { useContext } from 'react';
import ArcIon from './ArcIon';
import Header from './Header';
import Question from './Question';
import { InputFeaturesIndexProvider, InputFeaturesProvider, QuestionContext } from './Questions/QuestionsContent';

function Page() {
    const [questionNumber, setQuestionNumber] = useContext(QuestionContext);
    
    return (
        <div className="page">
            <div className="page__header">
                <Header questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
            </div>
            
            <div className="page__question">
                <InputFeaturesProvider>
                    <InputFeaturesIndexProvider>
                        <Question questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
                    </InputFeaturesIndexProvider>
                </InputFeaturesProvider>
            </div>
            
            <div className="page__arcIon">
                <ArcIon questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
            </div>
            
            <h1 className="page__branding">LinuxDistro4U Powerd by ArcCode</h1>
        </div>
    )
}

export default Page
