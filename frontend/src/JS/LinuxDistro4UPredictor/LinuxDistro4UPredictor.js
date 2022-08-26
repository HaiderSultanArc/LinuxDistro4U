import * as tf from '@tensorflow/tfjs';
import * as tflite from '@tensorflow/tfjs-tflite';
import {collection, getDocs} from "firebase/firestore";
import React, {useEffect, useState} from 'react';
import {db} from "../Firebase";
import {Questions} from "../Questions/QuestionsContext";

function LinuxDistro4UPredictor({questionNumber, inputFeatures}) {
    const [distro, setDistro] = useState(44);
    const inputTensor = tf.tensor(inputFeatures);
    const [linuxDistros, setLinuxDistros] = useState([{"name": "", "discription": "", "features": []}])
    
    useEffect(
        () => {
            getDocs(collection(db, "linuxDistros")).then(
                (snapShot) => {
                    setLinuxDistros(
                        snapShot.forEach(
                            (doc) => (
                                {
                                    "id": doc.id,
                                    "name": doc.data().name,
                                    "discription": doc.data().discription,
                                    "features": doc.data().features
                                }
                            )
                        )
                    )
                }
            );
        }, []
    )
    
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