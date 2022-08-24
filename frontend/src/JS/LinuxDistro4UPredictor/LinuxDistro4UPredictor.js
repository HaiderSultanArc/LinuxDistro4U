import '@tensorflow/tfjs-backend-cpu';
import * as tflite from '@tensorflow/tfjs-tflite';
import React, {useState} from 'react';
import {Questions} from "../Questions/QuestionsContext";
import linuxDistros from "./linuxDistros";

function LinuxDistro4UPredictor({questionNumber, inputFeatures}) {
    const [distro, setDistro] = useState(44);
    // const modelURL = "https://firebasestorage.googleapis.com/v0/b/linux-distro-4u.appspot.com/o/Model%2Fmodel.json?alt=media";
    const inputTensor = tf.tensor(inputFeatures);
    
    (async function() {
        // const model = await tf.loadLayersModel(modelURL);
        const model = tflite.loadTFLiteModel("https://firebasestorage.googleapis.com/v0/b/linux-distro-4u.appspot.com/o/Firebase%2FML%2FModels%2FLinuxDistro4UPredictor.tflite?alt=media&token=4c89dfb5-e6ed-44e4-87ea-d61b1ed0884d")
        const predictionArray = await model.predict(inputTensor.reshape([1, 52])).data();
        
        const max = Math.max.apply(Math, predictionArray.map((i) => i));
        setDistro(predictionArray.indexOf(max));
    })()
    
    return (
        <div className="other">
            <h1>{linuxDistros[distro]["name"]}</h1>
            <p>{Questions[questionNumber]["options"]}</p>
        </div>
    )
}

export default LinuxDistro4UPredictor