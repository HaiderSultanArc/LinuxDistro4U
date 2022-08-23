import {ArrowBackIosRounded, ArrowForwardIosRounded} from '@mui/icons-material';
import {IconButton} from '@mui/material';
import React, {useEffect, useState} from 'react';
import ArcIonImg from "../assets/Arc'Ion LinuxDistro4U.png";
import {Questions} from './Questions/QuestionsContext';

function ArcIon({questionNumber}) {
    const [speechIndex, setSpeechIndex] = useState(0);
    const [disableBackward, setDisableBackward] = useState(true);
    const [disableForward, setDisableForward] = useState(false);
    
    useEffect(
        () => {
            let arcIonButton = document.getElementById('arcIon__Button');
            
            setTimeout(() => arcIonButton.click(), 2500);
        }, []
    )
    
    useEffect(
        () => {
            setSpeechIndex(0);
            displaySpeechSwitch();
            setDisableBackward(true);
            setDisableForward(false);
        }, [questionNumber]
    )
    
    const displaySpeechSwitch = () => {
        const speechDiv = document.getElementById("speech");
        
        if (speechDiv.style.opacity === "0") {
            speechDiv.style.opacity = "1";
            speechDiv.style.zIndex = "1";
            
            setDisableBackward(false);
            setDisableForward(false); 
        }
        else {
            speechDiv.style.opacity = "0";
            speechDiv.style.zIndex = "-1";
            
            setDisableBackward(true);
            setDisableForward(true);
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
        if (speechIndex < Questions[questionNumber]['speech'].length - 1) {
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
            <IconButton id="arcIon__Button" onClick={displaySpeechSwitch}>
                <img src={ArcIonImg} alt="Arc'Ion Distro Box" />
            </IconButton>
            
            <div id="speech" className="arcIon__speech">
                <p>{Questions[questionNumber]['speech'][speechIndex]}</p>
                
                <div className="arcIon__speech_buttons">
                    <IconButton onClick={speechBackward} disabled={disableBackward}>
                        <ArrowBackIosRounded />
                    </IconButton>
                    
                    <IconButton onClick={speechForward} disabled={disableForward}>
                        <ArrowForwardIosRounded />
                    </IconButton>
                </div>
                
                <div className="arcIon__speech_circle1"></div>
                <div className="arcIon__speech_circle2"></div>
            </div>
        </div>
    )
}

export default ArcIon
