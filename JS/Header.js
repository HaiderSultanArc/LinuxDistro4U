import { IconButton } from '@material-ui/core';
import { ArrowBackIosRounded, ArrowForwardIosRounded, InfoOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { Questions } from './Questions/QuestionsContent';

function Header({questionNumber, setQuestionNumber}) {
    const [disableBackward, setDisableBackward] = useState(false);
    const [disableForward, setDisableForward] = useState(false);
    
    const previousQuestion = () => {
        if (questionNumber > 1) {
            setQuestionNumber(questionNumber - 1);
            setDisableForward(false);
        }
        else {
            setDisableBackward(true);
        }
    }
    
    const nextQuestion = () => {
        if (questionNumber < Questions.length - 1) {
            setQuestionNumber(questionNumber + 1);
            setDisableBackward(false);
        }
        else {
            setDisableForward(true);
        }
    }
    
    return (
        <div className="header">
            <div className="header__pageTitle">
                {
                    Questions[questionNumber]["questionNumber"] === 0 ? (
                        <p>...</p>
                    ) : (
                        <p>Question {Questions[questionNumber]["questionNumber"]}</p>
                    )
                }
            </div>
            <div className="header__navigation">
                
                
                <IconButton onClick={previousQuestion} disabled={disableBackward}>
                    <ArrowBackIosRounded />
                </IconButton>
                <IconButton onClick={nextQuestion} disabled={disableForward}>
                    <ArrowForwardIosRounded />
                </IconButton>
            </div>
            <div className="header__currentPageHelp">
                <IconButton>
                    <InfoOutlined />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
