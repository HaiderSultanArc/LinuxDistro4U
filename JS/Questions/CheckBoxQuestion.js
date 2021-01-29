import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Questions } from './QuestionsContext';

function CheckBoxQuestion({questionNumber, inputFeatures, setInputFeatures, inputFeaturesIndex}) {
    const [optionValues, setOptionValues] = useState([...Questions[questionNumber]['values']]);
    const [numberOfOptionsSelected, setNumberOfOptionsSelected] = useState(0);
    const [isMaxSelected, setIsMaxSelected] = useState(false);
    const [firstSelected, setFirstSelected] = useState(["empty"]);
    
    useEffect(
        () => {
            setOptionValues([...Questions[questionNumber]['values']]);
            setNumberOfOptionsSelected(0);
            setIsMaxSelected(false);
            setFirstSelected(["empty"]);
        }, [questionNumber]
    )
    
    useEffect(
        () => {
            let replaceInputFeatures = [...inputFeatures];
            let tempInputFeaturesIndex = inputFeaturesIndex;
            
            for (let i = 0; i < optionValues.length; i++) {
                replaceInputFeatures[tempInputFeaturesIndex] = optionValues[i];
                tempInputFeaturesIndex++;
            }
            
            setInputFeatures(replaceInputFeatures)
        }, [optionValues]
    )
    
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
                
                setFirstSelected(["empty"]);
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
            
            setFirstSelected(Questions[questionNumber]['classes'][optionNumber]);
            
            setNumberOfOptionsSelected(numberOfOptionsSelected + 1);
        }
        
        values[optionNumber] = currentValue;
        setOptionValues(values);   
        
        if (values.filter(value => value === 100).length > Questions[questionNumber]['max-selection']) {
            setIsMaxSelected(true);
        }
        else {
            setIsMaxSelected(false);
        }
    }
    
    const checkClass = (option) => {
        if (firstSelected.find(findOption => findOption === option) || firstSelected.find(findOption => findOption === "empty")) {
            return false;
        }
        else {
            return true;
        }
    }
    
    return (
        <div className="checkbox">
            <p className="checkbox__question" >{Questions[questionNumber]['question']}</p>
            
            <FormControl className="checkbox__formControl" error={isMaxSelected} disabled={isMaxSelected} >
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
                                            disabled={checkClass(option)}
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
