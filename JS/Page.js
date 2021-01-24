import React, { useContext } from 'react';
import ArcIon from './ArcIon';
import Header from './Header';
import Question from './Question';
import { QuestionContext } from './Questions/QuestionsContent';

function Page() {
    const [questionNumberProp, setQuestionNumber] = useContext(QuestionContext);
    
    return (
        <div className="page">
            <div className="page__header"><Header questionNumber={questionNumberProp} setQuestionNumber={setQuestionNumber} /></div>
            <div className="page__question"><Question questionNumber={questionNumberProp} setQuestionNumber={setQuestionNumber} /></div>
            <div className="page__arcIon"><ArcIon questionNumber={questionNumberProp} setQuestionNumber={setQuestionNumber} /></div>
        </div>
    )
}

export default Page
