import {FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup} from '@mui/material';
import {collection, getDocs} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {db} from '../Firebase';

function YesNoQuestion({questionNumber, inputFeatures, setInputFeatures, inputFeaturesIndex}) {
    const [Questions, setQuestions] = useState([{"questionNumber": 0, "type": "", "question": "", "options": [], "values": [], "classes": [[]], "max-selected": 0, "speech": [], "help-headings": [], "help-content": []}])
    const [optionValue, setOptionValue] = useState(Questions[questionNumber]['values'][0]);
    
    useEffect(
        () => {
            getDocs(collection(db, "Questions")).then(
                (snapShot) => {
                    setQuestions(
                        snapShot.forEach(
                            (doc) => (
                                {
                                    "id": doc.id,
                                    "questionNumber": doc.data().questionNumber,
                                    "type": doc.data().type,
                                    "question": doc.data().question,
                                    "options": doc.data().options,
                                    "values": doc.data().values,
                                    "classes": doc.data().classes,
                                    "max-selected": doc.data()["max-selected"],
                                    "speech": doc.data().speech,
                                    "help-headings": doc.data()["help-headings"],
                                    "help-content": doc.data()["help-content"]
                                }
                            )
                        )
                    )
                }
            )
        },[]
    )
    
    useEffect(
        () => {
            setOptionValue(Questions[questionNumber]['values'][0]);
        }, [questionNumber]
    )
    
    useEffect(
        () => {
            let replaceInputFeatures = [...inputFeatures];
            let tempInputFeaturesIndex = inputFeaturesIndex;
            
            replaceInputFeatures[tempInputFeaturesIndex] = optionValue;
            tempInputFeaturesIndex++;
            setInputFeatures(replaceInputFeatures);
        }, [optionValue]
    )
    
    return (
        <div className="yesNo">
            <p className="yesNo__question" >{Questions[questionNumber]['question']}</p>
            
            <FormControl className="yesNo__formControl">
                <FormLabel>Choose One Only</FormLabel>
                    <RadioGroup className="yesNo__radioGroup" value={optionValue} onChange={event => setOptionValue(parseInt(event.target.value))} >
                    <FormControlLabel
                        className="yesNo__formControlLabel"
                        label={Questions[questionNumber]['options'][0]}
                        value={100}
                        control={
                            <Radio className="yesNo__option" />
                        }
                    />
                    <FormControlLabel
                        className="yesNo__formControlLabel"
                        label={Questions[questionNumber]['options'][1]}
                        value={0}
                        control={
                            <Radio className="yesNo__option" />
                        }
                    />
                    <FormControlLabel
                        className="yesNo__formControlLabel"
                        label={Questions[questionNumber]['options'][2]}
                        value={50}
                        control={
                            <Radio className="yesNo__option" />
                        }
                    />
                    </RadioGroup>
                    <FormHelperText>You can skip this Question if you want</FormHelperText>
            </FormControl>
        </div>
    )
}

export default YesNoQuestion
