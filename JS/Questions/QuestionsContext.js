import React, { createContext, useState } from 'react';

export const QuestionContext = createContext();

export const QuestionsContextProvider = (props) => {
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
        "type": "other",
        "question": "LinuxDistro4U",
        "options": ["Find the best Linux Distro for yourself"],
        "speech": [
            "HI! I am Arc'Ion. I am a Bot, and I'll be your Helper today! Click the Forward Button Below the Dialogue text.",
            "I'll lead you through a set of Questions and you'll Answer them. Based on your response I'll tell you what Linux Distro Suits you.",
            "Click on me to Close the Dialogue and Start by Pressing the Forward Button on the middle of Header above. You can change Question Numbers from there."
        ]
    },
    {
        "questionNumber": 0,
        "type": "other",
        "question": "CheckBox Type Questions",
        "options": ["Check The Style You Like"],
        "speech": [
            "This Sections consists of Questions with Options as checkboxes, you can choose one or multiple or skip all of them.",
            "Some of the Questions might be too technical for a layman, don't worry! I have a general and easy reading material for each Question and it's options.",
            "Can you see that ! icon at the Top Right Corner of my Page? Click On that if you want some easy and concise Knowledge about the Stuff that I ask. Please don't Shy.",
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
            "Red Hat",
            "OpenSuse",
            "Gentoo",
            "Arch",
            "Linux From Scratch"
        ],
        "values": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        "max-selection": 2,
        "speech": [
            "Many Linux Distros are based of on other Distros, some are Independant while some are based on Linux From Scratch!. All have their own Ideology and Concept.",
            "Please note that different base Distros have different advantages, consider that in your response.",
            "So What System do you prefer?"
        ]
    },
    {
        "questionNumber": 2,
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
            "If you have hard time choosing you can checkout the Help Section from top right corner. I will tell you what each desktop feels like. It will help you, I am Confident.",
            "So, do you prefer a Style? You can change your Desktop in Linux Afterwards as well, It's Linux afterall... So don't get too confused on this."
        ]
    },
    {
        "questionNumber": 3,
        "type": "checkbox",
        "question": "What package manager you would like for your Distro?",
        "options": [
            "Cards",
            "deb",
            "Entropy",
            "Flatpak",
            "Nix",
            "Pacman",
            "PET",
            "Portage",
            "RPM",
            "Snap",
            "SRC",
            "TaxPkg",
            "Tar.xz",
            "TCE",
            "TLZ",
            "TXZ",
            "XBPS"
        ],
        "values": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        "max-selection": 3,
        "speech": [
            "Package Managers take care of Software management on your OS. Surely everyone is comfortable with some kind of management system.",
            "These can be confusing, I know, why don't you read about them in Help Section? It's meant for Layman understanding.",
            "So, you decided which one you wanna choose?"
        ]
    },
    {
        "questionNumber": 4,
        "type": "checkbox",
        "question": "What Office Suite would you like to help you in your day to day usage?",
        "options": [
            "Calligra",
            "gOffice",
            "KOffice",
            "LibreOffice",
            "OpenOffice"
        ],
        "values": [50, 50, 50, 50, 50],
        "max-selection": 3,
        "speech": [
            "Office Suits help you with your everyday usage of computers. Different Office Suits come with different Features.",
            "You must have Heard of Microsoft Office, that is also a Office Suite, but for Windows. If you want to learn more about Office Suite options in Linux, you should head to the Help Section.",
            "So, you know what Office Suite fits your choice of Features and Accessibility?"
        ]
    },
    {
        "questionNumber": 0,
        "type": "other",
        "question": "Yes/No Type Questions",
        "options": ["Select The Features and Benefits You Like"],
        "speech": [
            "This is more Critical and Decisive Section for me to give you a better Suggestion.",
            "Although you can still skip any question but I highly reocommend NOT DOING THAT. You can consult Help Section if you feel like.",
            "With that being said, let's continue."
        ]
    },
    {
        "questionNumber": 5,
        "type": "yesNo",
        "question": "Do You want your Distro to be Begginer Friendly?",
        "options": [
            "Yes",
            "No",
            "May or May not be"
        ],
        "values": [50],
        "speech": [
            "Linux can be quite a handful when it comes to difficulty. But Some Distros are Specifically focused on Begginers.",
            "You can Check in Help Section to see which Distros are Begginner Friendly",
            "So Do you want it as a YES?"
        ]
    },
    {
        "questionNumber": 6,
        "type": "yesNo",
        "question": "Do you want your Distro to be 100% Free?",
        "options": [
            "Yes",
            "No",
            "May or May not be"
        ],
        "values": [50],
        "speech": [
            "Linux is Free and Open-Source, but being 100% Free is not true for Linux as well, but some of the Distros truely hold the name for being 100% Free",
            "I want to mention that being 100% Free does'nt necassarily means a Good Thing. You might actually don't want that. Consult the Help Section to find out the Drawbacks.",
            "So you want your Distro to be 100% Free?"
        ]
    },
    {
        "questionNumber": 7,
        "type": "yesNo",
        "question": "Do you want your Distro to work Live from a USB as well as SSD or HDD?",
        "options": [
            "Yes",
            "No",
            "May or May not be"
        ],
        "values": [50],
        "speech": [
            "Linux can require some testing and prior Knowledge before starting. Don't worry, you can just install Distros, with Live Feature, on a USB and Test it as much as you want before actually switching to it.",
            "It's a pretty handy feature most of Linux Distros provide. If You want to know which Linux Distro provides this feature you can check the Help Section.",
            "So, do you want to test it or it does'nt matter?"
        ]
    },
    {
        "questionNumber": 8,
        "type": "yesNo",
        "question": "Do you want your Distro to run on very Lower End PC and Raspberry Pi as well?",
        "options": [
            "Yes",
            "No",
            "May or May not be"
        ],
        "values": [50],
        "speech": [
            "Linux is generally a lightweight OS. But some of it's Distros are Lightweight enough to run on a very lower end machine or a Raspberry Pi.",
            "Every Linux Distro is Lightweight some are just extra light. You can chech about them in Help Section.",
            "So, You want to run a Raspberry Pi or a very lower end PC?"
        ]
    },
    {
        "questionNumber": 9,
        "type": "yesNo",
        "question": "Do you want your Distro to work as a Server as well?",
        "options": [
            "Yes",
            "No",
            "May or May not be"
        ],
        "values": [50],
        "speech": [
            "Linux is Known for Security and Privacy. So it's naturally an option for a Server Machine.",
            "Some Distros are specially designed to work both as Server and Desktop. Hence very versatile. You can learn more about them in Help Section.",
            "So, are you gonna make your PC a Server as well?"
        ]
    },
    {
        "questionNumber": 10,
        "type": "yesNo",
        "question": "Do you want your Distro to be Source Based?",
        "options": [
            "Yes",
            "No",
            "May or May not be"
        ],
        "values": [50],
        "speech": [
            "Linux Distros are fast but the Distros that are Directly based on Source are Faster.",
            "You can check more about Source Based Distros in Help Section",
            "So, you want a Source Based Distro?"
        ]
    },
    {
        "questionNumber": 11,
        "type": "yesNo",
        "question": "Do you want your Distro to have an Easy Set Up?",
        "options": [
            "Yes",
            "No",
            "May or May not be"
        ],
        "values": [50],
        "speech": [
            "Linux Distros requires a Set up before you can use them. It can be quite a Headache. But most Distros provide a Graphical Set up, which is fairly.",
            "You can read about Setting Up Linux in Help Section.",
            "So, you want an Easier Set Up?"
        ]
    }
]