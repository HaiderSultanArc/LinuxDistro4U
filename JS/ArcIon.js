import { IconButton } from '@material-ui/core';
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@material-ui/icons';
import React, { useState } from 'react';
import ArcIonImg from "../assets/Arc'Ion LinuxDistro4U.png";
import { Questions } from './Questions/QuestionsContent';

function ArcIon({questionNumber}) {
    const [speechIndex, setSpeechIndex] = useState(0);
    const [disableBackward, setDisableBackward] = useState(true);
    const [disableForward, setDisableForward] = useState(false);
    
    const displaySpeechSwitch = () => {
        const speechDiv = document.getElementById("speech");
        
        if (speechDiv.style.opacity === "0") {
            speechDiv.style.opacity = "1";
        }
        else {
            speechDiv.style.opacity = "0";
        }
    }
    
    const speechBackward = () => {
        if (speechIndex > 0) {
            setSpeechIndex(speechIndex - 1)
            setDisableBackward(false);
            setDisableForward(false);
        }
        else {
            setDisableBackward(true);
        }
    }
    
    const speechForward = () => {
        if (speechIndex < Questions[questionNumber].speech.length - 1) {
            setSpeechIndex(speechIndex + 1)
            setDisableForward(false);
            setDisableBackward(false);
        }
        else {
            setDisableForward(true);
        }
    }
    
    return (
        <div className="arcIon">
            <IconButton onClick={displaySpeechSwitch}>
                <img src={ArcIonImg} alt="Arc'Ion Distro Box" />
            </IconButton>
            
            <div id="speech" className="arcIon__speech">
                {Questions[questionNumber].speech[speechIndex]}
                
                <IconButton onClick={speechBackward} disabled={disableBackward}>
                    <ArrowBackIosRounded />
                </IconButton>
                
                <IconButton onClick={speechForward} disabled={disableForward}>
                    <ArrowForwardIosRounded />
                </IconButton>
                
                <div className="arcIon__speech_circle1"></div>
                <div className="arcIon__speech_circle2"></div>
            </div>
        </div>
    )
}

export default ArcIon
