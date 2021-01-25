import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Questions } from './QuestionsContext';

function CheckBoxQuestion({questionNumber, inputFeatures, setInputFeatures, inputFeaturesIndex}) {
    const [optionValues, setOptionValues] = useState([...Questions[questionNumber]['values']]);
    const [numberOfOptionsSelected, setNumberOfOptionsSelected] = useState(0);
    
    useEffect(
        () => {
            setOptionValues([...Questions[questionNumber]['values']]);
            setNumberOfOptionsSelected(0);
        }, [questionNumber]
    )
    
    const mapInputFeatures = () => {
        let replaceInputFeatures = [...inputFeatures];
        let tempInputFeaturesIndex = inputFeaturesIndex;
        
        for (let i = 0; i < optionValues.length; i++) {
            replaceInputFeatures[tempInputFeaturesIndex] = optionValues[i];
            console.log("TEST { replaceInputFeatures[", tempInputFeaturesIndex, "]: ", replaceInputFeatures[tempInputFeaturesIndex], " }");
            console.log("TEST { optionValues[", i,"]: ", optionValues[i], " }");
            tempInputFeaturesIndex++;
        }
        
        // console.log("TEST { tempInputFeaturesIndex: ", tempInputFeaturesIndex, " }");
        // console.log("TEST { replaceInputFeatures: ", replaceInputFeatures, " }");
        
        setInputFeatures(replaceInputFeatures);
        
        // console.log("TEST { inputFeaturesIndex:", inputFeaturesIndex, " }");
        // console.log("TEST { inputFeatures:", inputFeatures, " }");
    }
    
    const selectedValue = (optionNumber) => (event) => {
        let values = [...optionValues];
        let currentValue = optionValues[optionNumber];
        
        if (numberOfOptionsSelected === 1) {
            if (currentValue === 0) {
                currentValue = 100;
                setNumberOfOptionsSelected(numberOfOptionsSelected + 1)
            }
            else {
                for (let i = 0; i < values.length; i++) {
                    values[i] = 50;
                }
                
                currentValue = 50;
                setNumberOfOptionsSelected(numberOfOptionsSelected - 1);
            }
        }
        else if (numberOfOptionsSelected > 1) {
            if (currentValue) {
                currentValue = 0;
                setNumberOfOptionsSelected(numberOfOptionsSelected - 1);
            }
            else {
                currentValue = 100;
                setNumberOfOptionsSelected(numberOfOptionsSelected + 1)
            }
        }
        else {
            for (let i = 0; i < values.length; i++) {
                values[i] = 0;
            }
            
            currentValue = 100;
            
            setNumberOfOptionsSelected(numberOfOptionsSelected + 1);
        }
        
        values[optionNumber] = currentValue;
        setOptionValues(values);
        
        mapInputFeatures();
    }
    
    return (
        <div className="checkbox">
            <p className="checkbox__question" >{Questions[questionNumber]['question']}</p>
            
            <FormControl className="checkbox__formControl" >
                <FormLabel>Pick {Questions[questionNumber]['max-selection']} Atmost</FormLabel>
                <FormGroup className="checkbox__formGroup" row>
                    {
                        Questions[questionNumber]['options'].map(
                            (option, optionNumber) => (
                                <FormControlLabel
                                    key={optionNumber}
                                    className="checkbox__formControlLabel"
                                    label={option}
                                    value={optionValues[optionNumber]}
                                    onClick={selectedValue(optionNumber)}
                                    control={
                                        <Checkbox 
                                            className="checkbox__option"
                                            checked={optionValues[optionNumber] === 100 ? (true) : (false)}
                                        />
                                    }
                                />
                            )
                        )
                    }
                </FormGroup>
                <FormHelperText>You can skip this Question if you want</FormHelperText>
            </FormControl>
        </div>
    )
}

export default CheckBoxQuestion
