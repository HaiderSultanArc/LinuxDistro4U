import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Questions } from './QuestionsContext';

function YesNoQuestion({questionNumber, inputFeatures, setInputFeatures, inputFeaturesIndex}) {
    const [optionValue, setOptionValue] = useState(Questions[questionNumber]['values'][0]);
    
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
