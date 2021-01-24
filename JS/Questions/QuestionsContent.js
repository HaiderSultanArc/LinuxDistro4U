import React, { createContext, useState } from 'react';

export const QuestionContext = createContext();

export const QuestionsContentProvider = (props) => {
    const [questionNumber, setQuestonNumber] = useState(0);
    
    return (
        <QuestionContext.Provider value={[questionNumber, setQuestonNumber]}>
            {props.children}
        </QuestionContext.Provider>
    )
}

export const Questions = [
    {
        "questionNumber": 0,
        "type": "home",
        "question": "",
        "options": [""],
        "values":[0],
        "speech": [
            "HI! I am Arc'Ion. I am a Bot, and I'll be your Helper today! I'll lead you through a set of Questions and you'll Answer them. Based on your response I'll tell you what Linux Distro Suit's you. Clikc on me to get my Assitance.",
            "Click on me to Close the Dialogue and Start by Pressing the Blue Button with Arrow under the Text."
        ]
    },
    {
        "questionNumber": 1,
        "type": "checkbox",
        "question": "Do you want any specific OS as the base of your Linux Distro or you want an Independant Distro or Linux From Scratch? If Yes, then which one?",
        "options": [
            "Independant",
            "Slackware",
            "Debian",
            "Ubuntu",
            "Fedora",
            "Arch",
            "Linux From Scratch"
        ],
        "values": [
            50,
            50,
            50,
            50,
            50,
            50,
            50  
        ],
        "speech": [
            "Many Linux Distros are based of on other Distros, some are Independant while some are based on Linux From Scratch!."
        ]
    }
]