import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Questions } from './QuestionsContext';

function YesNoQuestion({questionNumber, inputFeatures, setInputFeatures, inputFeaturesIndex}) {
    const [optionValue, setOptionValue] = useState(Questions[questionNumber]['values'][0]);
    
    useEffect(
        () => {
            setOptionValue(Questions[questionNumber]['values']);
        }, [questionNumber]
    )
    
    const mapInputFeatures = () => {
        let replaceInputFeatures = [...inputFeatures];
        let tempInputFeaturesIndex = inputFeaturesIndex;
        
        replaceInputFeatures[tempInputFeaturesIndex] = optionValue;
        tempInputFeaturesIndex++;
        
        // console.log("TEST { tempInputFeaturesIndex: ", tempInputFeaturesIndex, " }");
        console.log("TEST { replaceInputFeatures: ", replaceInputFeatures, " }");
        console.log("TEST { optionValue: ", optionValue, " }");
        
        setInputFeatures(replaceInputFeatures);
        
        // console.log("TEST { inputFeaturesIndex: ", inputFeaturesIndex, " }");
        // console.log("TEST { inputFeatures:", inputFeatures, " }");
    }
    
    const selectedValue = (event) => {
        setOptionValue(parseInt(event.target.value));
        mapInputFeatures();
    }
    
    return (
        <div className="yesNo">
            <p className="yesNo__question" >{Questions[questionNumber]['question']}</p>
            
            <FormControl className="yesNo__formControl">
                <FormLabel>Choose One Only</FormLabel>
                    <RadioGroup className="yesNo__radioGroup" value={optionValue} onChange={event => selectedValue(event)} >
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
