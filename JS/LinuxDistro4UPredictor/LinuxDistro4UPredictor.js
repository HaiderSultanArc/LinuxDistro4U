import * as tf from '@tensorflow/tfjs';
import React from 'react';
import { Questions } from "../Questions/QuestionsContext";
import linuxDistros from "./linuxDistros";

function LinuxDistro4UPredictor({questionNumber, inputFeatures}) {
    const getPrediction = async () => {
        const distroPredictorLink = `file:///${__dirname}/model.json`;
        
        const distroPredictor = await tf.loadLayersModel(distroPredictorLink);
        const prediction = distroPredictor.predict(inputFeatures);
        
        console.log("Prediction: ", prediction);
        
        return prediction;
    }
    
    const prediction = [getPrediction()];
    const distro = prediction[Math.max(...prediction)];
    
    // console.log("Prediction: ", prediction);
    console.log("Distro: ", distro);
    
    return (
        <div className="other">
            <h1>{linuxDistros[1]["name"]}</h1>
            <p>{Questions[questionNumber]["options"]}</p>
        </div>
    )
}

export default LinuxDistro4UPredictor