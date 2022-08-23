import {ArrowForwardIosRounded} from '@mui/icons-material';
import {IconButton} from '@mui/material';
import React from 'react';
import {Questions} from './QuestionsContext';

function Other({questionNumber, setQuestionNumber}) {
    const start = () => {
        setQuestionNumber(questionNumber + 1);
    }
    
    return (
        <div className="other">
            <h1>{Questions[questionNumber]["question"]}</h1>
            <p>{Questions[questionNumber]["options"]}</p>
            
            <IconButton className="other__continue" onClick={start}>
                <ArrowForwardIosRounded />
            </IconButton>
        </div>
    )
}

export default Other
