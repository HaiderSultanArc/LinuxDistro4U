import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Questions } from './QuestionsContent';

function YesNoQuestion({questionNumber, inputFeatures, setInputFeatures, inputFeaturesIndex, setInputFeaturesIndex}) {
    const [optionValue, setOptionValue] = useState(Questions[questionNumber]['values']);
    
    useEffect(
        () => {
            let replaceInputFeaturesValues = [...inputFeatures];
            let replaceInputFeaturesIndex = inputFeaturesIndex;
            
            replaceInputFeaturesValues[replaceInputFeaturesIndex] = optionValue;
            
            setInputFeaturesIndex(replaceInputFeaturesIndex);
            setInputFeatures(replaceInputFeaturesValues);
            
            console.log("TEST { inputFeaturesIndex: ", inputFeaturesIndex, " }");
            console.log("TEST { optionValue: ", optionValue, " }");
            console.log("TEST { inputFeatures:", inputFeatures, " }");
            
            setOptionValue(Questions[questionNumber]['values']);
        }, [questionNumber]
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
