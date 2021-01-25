import React, { createContext, useState } from "react";

export const InputFeaturesContext = createContext();

export const InputFeaturesProvider = (props) => {
    const [inputFeatures, setInputFeatures] = useState(
        [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 
         50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 
         50]
    )
    
    return (
        <InputFeaturesContext.Provider value={[inputFeatures, setInputFeatures]}>
            {props.children}
        </InputFeaturesContext.Provider>
    )
}

export const InputFeaturesIndexContext = createContext();

export const InputFeaturesIndexProvider = (props) => {
    const [inputFeaturesIndex, setInputFeaturesIndex] = useState(0);
    
    return (
        <InputFeaturesIndexContext.Provider value={[inputFeaturesIndex, setInputFeaturesIndex]} >
            {props.children}
        </InputFeaturesIndexContext.Provider>
    )
}