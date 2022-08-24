import * as tf from '@tensorflow/tfjs';
import * as tflite from '@tensorflow/tfjs-tflite';
import React, {useState} from 'react';
import {Questions} from "../Questions/QuestionsContext";
import linuxDistros from "./linuxDistros";

function LinuxDistro4UPredictor({questionNumber, inputFeatures}) {
    
    const [distro, setDistro] = useState(44);
    const inputTensor = tf.tensor(inputFeatures);
    
    try {
        (async function() {
            await tflite.loadTFLiteModel("https://firebasestorage.googleapis.com/v0/b/linux-distro-4u.appspot.com/o/Firebase%2FML%2FModels%2FLinuxDistro4UPredictor.tflite?alt=media&token=4c89dfb5-e6ed-44e4-87ea-d61b1ed0884d").then(
                model => {
                    model.predict(inputTensor.reshape([1, 52])).array().then(
                        predictionArray => {
                            const max = Math.max.apply(Math, predictionArray[0].map((i) => i));
                            setDistro(predictionArray[0].indexOf(max));
                        }
                    )
                }
            )
        })()
    } catch (error) {
        console.log(error)
    }
    
    return (
        <div className="other">
            <h1>{linuxDistros[distro]["name"]}</h1>
            <p>{Questions[questionNumber]["options"]}</p>
        </div>
    )
}

export default LinuxDistro4UPredictor