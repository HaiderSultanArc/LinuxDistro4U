import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Questions } from './QuestionsContent';

function YesNoQuestion({questionNumber}) {
    const [optionValue, setOptionValue] = useState(Questions[questionNumber]['values']);
    
    useEffect(
        () => {
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
            </FormControl>
        </div>
    )
}

export default YesNoQuestion
