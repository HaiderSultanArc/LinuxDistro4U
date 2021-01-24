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
        "type": "home",
        "question": "",
        "options": [""],
        "values":[0],
        "speech": [
            "HI! I am Arc'Ion. I am a Bot, and I'll be your Helper today! Click the Forward Button Below the Dialogue text.",
            "I'll lead you through a set of Questions and you'll Answer them. Based on your response I'll tell you what Linux Distro Suits you.",
            "Click on me to Close the Dialogue and Start by Pressing the Forward Button on the middle of Header above. You can change Question Numbers from there."
        ]
    },
    {
        "type": "checkbox",
        "question": "Do you want any specific OS as the base of your Linux Distro or you want an Independant Distro or Linux From Scratch? If Yes, then which one?",
        "options": [
            "Independant",
            "Slackware",
            "Debian",
            "Ubuntu",
            "Fedora",
            "Red Hat",
            "OpenSuse",
            "Gentoo",
            "Arch",
            "Linux From Scratch"
        ],
        "values": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50  ],
        "max-selection": 2,
        "speech": [
            "Some of the Questions might be too technical for a layman, don't worry! I have a general and easy reading material for each Question and it's options.",
            "Can you see that ! icon at the Top Right Corner of my Page? Click On that if you want some easy and concise Knowledge about the Stuff that I ask. Please don't Shy.",
            "Many Linux Distros are based of on other Distros, some are Independant while some are based on Linux From Scratch!. All have their own Ideology and Concept.",
            "So What do you Like?"
        ]
    },
    {
        "type": "checkbox",
        "question": "What type of Desktop you like?",
        "options": [
            "Cinnamon",
            "Enlightment",
            "FluxBox",
            "Fast Light Window Manager",
            "GNOME",
            "Joe's Window Manger",
            "KDE Plasma",
            "Lightweight X11 Desktop Environment (LXDE)",
            "Lightweight Qt Desktop (LXQt)",
            "MATE",
            "OpenBox",
            "XForms Common Environment (XFCE)",
        ],
        "values": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        "max-selection": 6,
        "speech": [
            "Desktop is the face of an OS. Having a liking towards a Style is completely normal. You might like Simple Syles, or more Robust Styles. Windows like or Apple like, or maybe old school type, who knows...",
            "If you have hard time choosing you can checkout the Help Section from top right corner. I have a concise reading for you. It will help you, I am Confident.",
            "So, do you prefer a Style? You can change your Desktop in Linux Afterwards as well, It's Linux afterall... So don't get too confused on this."
        ]
    }
]