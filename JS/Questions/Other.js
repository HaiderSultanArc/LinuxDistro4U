import React from 'react';
import { Questions } from './QuestionsContent';

function Home({questionNumber, setQuestionNumber}) {
    const start = () => {
        setQuestionNumber(questionNumber + 1);
    }
    
    return (
        <div className="home">
            <h1>{Questions[questionNumber]["question"]}</h1>
            <p>{Questions[questionNumber]["options"]}</p>
            
            {/* <IconButton className="home__continue" onClick={start}>
                <ArrowForwardIosRounded />
            </IconButton> */}
        </div>
    )
}

export default Home
