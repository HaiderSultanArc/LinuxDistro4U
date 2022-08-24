import * as tf from '@tensorflow/tfjs';
import React, {useState} from 'react';
import {Questions} from "../Questions/QuestionsContext";
import linuxDistros from "./linuxDistros";

function LinuxDistro4UPredictor({questionNumber, inputFeatures}) {
    const [distro, setDistro] = useState(44);
    const modelURL = "https://firebasestorage.googleapis.com/v0/b/linux-distro-4u.appspot.com/o/Model%2Fmodel.json?alt=media";
    const inputTensor = tf.tensor(inputFeatures);
    
    (async function() {
        const model = await tf.loadLayersModel(modelURL);
        const predictionArray = await model.predict(inputTensor.reshape([1, 52])).data();
        
        const max = Math.max.apply(Math, predictionArray.map((i) => i));
        setDistro(predictionArray.indexOf(max));
        
        console.log("predictionArray: ", predictionArray);
        console.log("max: ", max);
        console.log("distro: ", distro);
    })()
    
    return (
        <div className="other">
            <h1>{linuxDistros[distro]["name"]}</h1>
            <p>{Questions[questionNumber]["options"]}</p>
        </div>
    )
}

export default LinuxDistro4UPredictor