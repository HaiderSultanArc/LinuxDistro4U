import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import React, { useState } from 'react';
import { Questions } from './QuestionsContent';

function CheckBoxQuestion({questionNumber}) {
    const [optionValue, setOptionValue] = useState(Questions[questionNumber].values);
    const [numberOfOptionsSelected, setNumberOfOptionsSelected] = useState(0);
    
    const selectedValue = (optionNumber) => (event) => {
        let values = [...optionValue];
        let currentValue = optionValue[optionNumber];
        
        console.log("TEST { Previous numberOfOptionsSelected: ", numberOfOptionsSelected, " }");
        
        if (numberOfOptionsSelected === 1) {
            if (currentValue === 0) {
                currentValue = 100;
                setNumberOfOptionsSelected(numberOfOptionsSelected + 1)
            }
            else {
                for (let i = 0; i < values.length; i++) {
                    values[i] = 50;
                }
                
                console.log("Worked?");
                
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
        
        console.log("TEST { Now numberOfOptionsSelected: ", numberOfOptionsSelected, " }");
        
        values[optionNumber] = currentValue;
        setOptionValue(values);
        
        for (let i = 0; i < optionValue.length; i++) {
            console.log("Option No.", i, ") ", Questions[questionNumber].options[i], ": ", optionValue[i]);
        }
    }
    
    return (
        <div className="checkbox">
            <p>{Questions[questionNumber].question}</p>
            <FormControl>
                <FormLabel >Pick 2 Atmost</FormLabel>
                <FormGroup>
                    {
                        Questions[questionNumber].options.map(
                            (option, optionNumber) => (
                                <FormControlLabel 
                                    label={option}
                                    control={
                                        <Checkbox key={optionNumber} color={'primary'} onClick={selectedValue(optionNumber)} />
                                    }
                                />
                            )
                        )
                    }
                </FormGroup>
            </FormControl>
        </div>
    )
}

export default CheckBoxQuestion
