import React, { useContext } from 'react';
import ArcIon from './ArcIon';
import Header from './Header';
import Question from './Question';
import { QuestionContext } from './Questions/QuestionsContent';

function Page() {
    const [questionNumber, setQuestionNumber] = useContext(QuestionContext);
    
    return (
        <div className="page">
            <div className="page__header"><Header questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} /></div>
            <div className="page__question"><Question questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} /></div>
            <div className="page__arcIon"><ArcIon questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} /></div>
        </div>
    )
}

export default Page
