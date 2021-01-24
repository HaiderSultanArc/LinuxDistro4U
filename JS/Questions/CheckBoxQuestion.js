import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@material-ui/core';
import React, { useState } from 'react';
import { Questions } from './QuestionsContent';

function CheckBoxQuestion({questionNumber}) {
    const [optionValue, setOptionValue] = useState(Questions[questionNumber]['values']);
    const [numberOfOptionsSelected, setNumberOfOptionsSelected] = useState(0);
    
    const selectedValue = (optionNumber) => (event) => {
        let values = [...optionValue];
        let currentValue = optionValue[optionNumber];
        
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
        setOptionValue(values);
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
                                    className="checkbox__formControlLabel"
                                    label={option}
                                    control={
                                        <Checkbox className="checkbox__option" key={optionNumber} onClick={selectedValue(optionNumber)} />
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
