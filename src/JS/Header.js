import {ArrowBackIosRounded, ArrowForwardIosRounded, Close, InfoOutlined} from '@mui/icons-material';
import {IconButton} from '@mui/material';
import React, {useState} from 'react';
import QuestionHelp from './Questions/QuestionHelp';
import {Questions} from './Questions/QuestionsContext';


function Header({questionNumber, setQuestionNumber, inputFeaturesIndex, setInputFeaturesIndex}) {
    const [disableBackward, setDisableBackward] = useState(false);
    const [disableForward, setDisableForward] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    
    const previousQuestion = () => {
        if (questionNumber > 1) {
            if (Questions[questionNumber - 1]['questionNumber'] !== 0) {
                let replaceInputFeaturesIndex = inputFeaturesIndex;
                
                for (let i = Questions[questionNumber - 1]["values"].length - 1; i >= 0; i--) {
                    replaceInputFeaturesIndex--;
                }
                
                setInputFeaturesIndex(replaceInputFeaturesIndex);
            }
            
            setQuestionNumber(questionNumber - 1);
            setDisableForward(false);
        }
        else {
            setDisableBackward(true);
        }
    }
    
    const nextQuestion = () => {
        if (questionNumber < Questions.length - 1) {
            if (Questions[questionNumber]['questionNumber'] !== 0) {
                let replaceInputFeaturesIndex = inputFeaturesIndex;
                
                for (let i = 0; i < Questions[questionNumber]["values"].length; i++) {
                    replaceInputFeaturesIndex++;
                }
                
                setInputFeaturesIndex(replaceInputFeaturesIndex);
            }
            
            setQuestionNumber(questionNumber + 1);
            setDisableBackward(false);
        }
        else {
            setDisableForward(true);
        }
    }
    
    const showPageHelp = () => {
        let pageHelp = document.getElementById('currentPageHelp');
        
        if (pageHelp.style.zIndex === "-100") {
            pageHelp.style.opacity = "1";
            pageHelp.style.zIndex = "100";
            pageHelp.style.display = "flex";
            
            setIsHelpOpen(true);
        }
        else {
            pageHelp.style.opacity = "0";
            pageHelp.style.zIndex = "-100";
            
            setIsHelpOpen(false);
        }
    }
    
    return (
        <>
            <header className="header">
                <div className="header__pageTitle">
                    {
                        Questions[questionNumber]["questionNumber"] === 0 ? (
                            isHelpOpen ? (
                                <p>HELP</p>
                            ) : (
                                <p>...</p>
                            )
                        ) : (
                            <p>Question {Questions[questionNumber]["questionNumber"]}</p>
                        )
                    }
                </div>
                
                <div className="header__navigation">
                    <IconButton onClick={previousQuestion} disabled={disableBackward || isHelpOpen}>
                        <ArrowBackIosRounded />
                    </IconButton>
                    <IconButton onClick={nextQuestion} disabled={disableForward || isHelpOpen}>
                        <ArrowForwardIosRounded />
                    </IconButton>
                </div>
                
                <div className="header__currentPageHelp">
                    <IconButton onClick={showPageHelp}>
                        {
                            isHelpOpen ? (
                                <Close />
                            ) : (
                                <InfoOutlined  />
                            )
                        }
                    </IconButton>
                </div>
            </header>
            
            <div id="currentPageHelp" >
                <QuestionHelp questionNumber={questionNumber} />
            </div>
        </>
    )
}

export default Header
