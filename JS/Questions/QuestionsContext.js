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
            "HI! I am Arc'Ion. I am a Bot, and I'll be your Helper today! Click the Forward and Backwards Button Below the Dialogue text to control my Speech.",
            "I'll lead you through a set of Questions and you'll Answer them. Based on your response I'll tell you what Linux Distro Suits you.",
            "Navigation Buttons in the middle of Header above can be used to change Question Numbers.",
            "Please Note that if you Choose to return to a Question You will have to Answer that Question Again.",
            "I record your answers and make space available for next Question. If you came back, I assume you want to answer again, so I delete your previous Recorded Answers for that Question",
            "With that said, let's Continue. Please Click on me to close Dialogue (or Open it again) and press Blue Button under the Text."
        ],
        "help-headings": [
            "ARC'ION HELP",
            "QUESTIONS NAVIGATION",
            "RESPONSE CONTROLS",
            "LINUX DISTROS INCLUDED",
            "CONTINUE TO NEXT QUESTION",
        ],
        "help-content": [
            "Click on Arc'Ion to get his Help. Click on the Buttons under his Speech Text to Control his Speech",
            "Click on Navigational Buttons in the Middle of the Header to Change Question Numbers. Arc'Ion Notes down your Response as soon as you Respond, if you go to Next Question, your response for previous Question will be saved but if you decided to come back to previous question then Arc'Ion assumes you want to answer again and he Resets your previous Response to that Question, so you have to Answer again.",
            "Arc'Ion will put a control on Options for your Response so that you can stay on Track and don't select Options that are not Coorelating to each other.",
            "Arc'Ion suggests only the Distros that are used for Desktop/Daily usage, no 'Special Purpose' Distro will be Suggested. Arc'Ion also omits the Distros that are 'Dead' or are not Mature Enough.",
            "Close this Section and Press Blue Button under the Text to Continue to the Questions"
        ]
    },
    {
        "questionNumber": 0,
        "type": "other",
        "question": "CheckBox Type Questions",
        "options": ["Check The Utilities You Like"],
        "speech": [
            "This Sections consists of Questions with Options as checkboxes, you can choose one or multiple or skip all of them (I would'nt Recommend Skipping).",
            "Some of the Questions might be too technical for a layman, don't worry! I have a general and easy reading material for each Question and it's options.",
            "Can you see that ! icon at the Top Right Corner of my Page? Click On that if you want some easy and concise Knowledge about the Stuff that I ask. Please don't Shy.",
        ],
        "help-headings": [
            "CHECKBOX QUESTIONS",
            "SKIPPING QUESTIONS",
            "MAXIMUM SELECTION",
            "RESPONSE CONTROL",
            "CONTINUE TO NEXT QUESTION",
        ],
        "help-content": [
            "These Questions are CheckBox type, you can Choose Multiple Options",
            "You can Skip any Question you want but skipping most of them will significantly effect Arc'Ion's Final Suggestion. This may cause problems. That's why Skipping any Question is not Recommended",
            "You can Read the Maximum Selection you may want to make for any Question, although Arc'Ion will not prohibit you from selecting more but the Form color will turn to Red if you make more than Desired Selections.",
            "Arc'Ion will put a control on Options for your Response so that you can stay on Track and don't select Options that are not Coorelating to each other.",
            "Close this Section and Press Blue Button under the Text to Continue to the Questions"
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
        "classes": [
            ["Independant"],
            ["Slackware"],
            ["Debian", "Ubuntu"],
            ["Debian", "Ubuntu"],
            ["Fedora", "Red Hat"],
            ["Fedora", "Red Hat"],
            ["OpenSuse"],
            ["Gentoo"],
            ["Arch"],
            ["Linux From Scratch"]
        ],
        "max-selection": 2,
        "speech": [
            "Many Linux Distros are based of on other Distros, some are Independant while some are based on Linux From Scratch!. All have their own Ideology and Concept.",
            "Please note that different base Distros have different advantages, consider that in your response.",
            "So What System do you prefer?"
        ],
        "help-headings": [
            "INDEPENDANT",
            "SLACKWARE",
            "DEBIAN",
            "UBUNTU",
            "FEDORA",
            "RED HAT",
            "OPENSUSE",
            "GENTOO",
            "ARCH",
            "LINUX FROM SCRATCH"
        ],
        "help-content": [
            "These are the Distros that are not based on any other Distro. Some of them may provide Base for Other Distros while other are just small scale Distros made by an Organisation.",
            "Slackware is the Oldest Linux Distro that is still being maintained. To put it simple this is the Old School type OS. It's Aim is Stability with Ease of Use. It includes latest Softwares with Retaining Traditional Style UI",
            "Debian is the most famous and widely used Base Distro. It's goal is Free and Fully Featured Operating System.",
            "Ubuntu is a complete desktop Linux operating system, freely available with both community and professional support. The Ubuntu community is built on the ideas enshrined in the Ubuntu Manifesto: that software should be available free of charge, that software tools should be usable by people in their local language and despite any disabilities, and that people should have the freedom to customise and alter their software in whatever way they see fit.",
            "Fedora contains software distributed under a free and open-source license and aims to be on the leading edge of such technologies. Fedora has a reputation for focusing on innovation, integrating new technologies early on and working closely with upstream Linux communities.",
            "Red Hat owns Fedora and Red Hat Enterprise Linux. Red Hat uses strict trademark rules to restrict free re-distribution of its officially supported versions of Red Hat Enterprise Linux, but still freely provides its source code. Third-party derivatives can be built and redistributed by stripping away non-free components.",
            "The openSUSE project is a community program sponsored by SUSE Linux and other companies. Promoting the use of Linux everywhere, this program provides free, easy access to openSUSE, a complete Linux distribution. The openSUSE project has three main goals: make openSUSE the easiest Linux for anyone to obtain and the most widely used Linux distribution; leverage open source collaboration to make openSUSE the world's most usable Linux distribution and desktop environment for new and experienced Linux users; dramatically simplify and open the development and packaging processes to make openSUSE the platform of choice for Linux developers and software vendors.",
            "Gentoo Linux is a versatile and fast, completely free Linux distribution geared towards developers and network professionals. It is set to satisfy more experienced users.",
            "Arch Linux is an independently developed, x86_64-optimised Linux distribution targeted at competent Linux users. Arch Linux defines simplicity as without unnecessary additions or modifications. Arch is a pragmatic distribution rather than an ideological one. The principles here are only useful guidelines. Ultimately, design decisions are made on a case-by-case basis through developer consensus. Evidence-based technical analysis and debate are what matter, not politics or popular opinion. Whereas many GNU/Linux distributions attempt to be more user-friendly, Arch Linux has always been, and shall always remain user-centric. The distribution is intended to fill the needs of those contributing to it, rather than trying to appeal to as many users as possible. It is targeted at the proficient GNU/Linux user, or anyone with a do-it-yourself attitude who is willing to read the documentation, and solve their own problems. Arch Linux is a general-purpose distribution. Upon installation, only a command-line environment is provided: rather than tearing out unneeded and unwanted packages, the user is offered the ability to build a custom system by choosing among thousands of high-quality packages.",
            "Linux From Scratch (LFS) is a project that provides you with step-by-step instructions for building your own customized Linux system entirely from source. "
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
            "Fast Light Window Manager (flwm)",
            "GNOME",
            "Joe's Window Manger (JWM)",
            "KDE Plasma",
            "Lightweight X11 Desktop Environment (LXDE)",
            "Lightweight Qt Desktop (LXQt)",
            "MATE",
            "OpenBox",
            "XForms Common Environment (XFCE)",
        ],
        "values": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        "classes": [
            ["Cinnamon", "Enlightment", "KDE Plasma", "Lightweight X11 Desktop Environment (LXDE)", "Lightweight Qt Desktop (LXQt)", "MATE", "XForms Common Environment (XFCE)"],
            ["Cinnamon", "Enlightment", "Lightweight X11 Desktop Environment (LXDE)", "Lightweight Qt Desktop (LXQt)", "MATE", "XForms Common Environment (XFCE)"],
            ["FluxBox", "MATE", "XForms Common Environment (XFCE)"],
            ["Fast Light Window Manager (flwm)"],
            ["GNOME", "KDE Plasma", "Lightweight Qt Desktop (LXQt)", "MATE", "XForms Common Environment (XFCE)"],
            ["Joe's Window Manger (JWM)"],
            ["Cinnamon", "GNOME", "KDE Plasma", "Lightweight Qt Desktop (LXQt)", "MATE", "XForms Common Environment (XFCE)"],
            ["Cinnamon", "Enlightment", "Lightweight X11 Desktop Environment (LXDE)", "Lightweight Qt Desktop (LXQt)", "MATE", "XForms Common Environment (XFCE)"],
            ["Cinnamon", "Enlightment", "GNOME", "KDE Plasma", "Lightweight X11 Desktop Environment (LXDE)", "Lightweight Qt Desktop (LXQt)", "MATE", "XForms Common Environment (XFCE)"],
            ["Cinnamon", "Enlightment", "FluxBox", "GNOME", "KDE Plasma", "Lightweight X11 Desktop Environment (LXDE)", "Lightweight Qt Desktop (LXQt)", "MATE", "XForms Common Environment (XFCE)"],
            ["OpenBox"],
            ["Cinnamon", "Enlightment", "FluxBox", "GNOME", "KDE Plasma", "Lightweight X11 Desktop Environment (LXDE)", "Lightweight Qt Desktop (LXQt)", "MATE", "XForms Common Environment (XFCE)"]
        ],
        "max-selection": 6,
        "speech": [
            "Desktop is the face of an OS. Having a liking towards a Style is completely normal. You might like Simple Syles, or more Robust Styles. Windows like or Apple like, or maybe old school type, who knows...",
            "If you have hard time choosing you can checkout the Help Section from top right corner. I will tell you what each desktop feels like. It will help you, I am Confident.",
            "So, do you prefer a Style? You can change your Desktop in Linux Afterwards as well, It's Linux afterall... So don't get too confused on this."
        ],
        "help-headings": [
            "CINNAMON",
            "ENLIGHTMENT",
            "FLUXBOX",
            "FAST LIGHT WINDOW MANAGER (FLWM)",
            "GNOME",
            "JOE'S WINDOW MANAGER (JWM)",
            "KDE PLASMA",
            "LIGHTWEIGHT X11 DESKTOP ENVIRONMENT (LXDE)",
            "LIGHTWEIGHT QT DESKTOP (LXQT)",
            "MATE",
            "OPENBOX",
            "XFORMS COMMON ENVIRONMENT (XFCE)"
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
            "TazPkg",
            "Tar.xz",
            "TCE",
            "TLZ",
            "TXZ",
            "XBPS"
        ],
        "values": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        "classes": [
            ["Cards"],
            ["deb", "Flatpak", "Snap"],
            ["Entropy"],
            ["deb", "Flatpak", "RPM", "Snap"],
            ["Nix"],
            ["Pacman"],
            ["PET"],
            ["Portage"],
            ["Flatpak", "RPM"],
            ["deb", "Flatpak", "Snap"],
            ["SRC"],
            ["TazPkg"],
            ["Tar.xz"],
            ["TCE"],
            ["TLZ"],
            ["TXZ"],
            ["XBPS"]
        ],
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
        "classes": [
            ["Calligra", "gOffice", "LibreOffice"],
            ["Calligra", "gOffice", "KOffice", "LibreOffice", "OpenOffice"],
            ["gOffice", "KOffice", "OpenOffice"],
            ["Calligra", "gOffice", "LibreOffice"],
            ["Calligra", "KOffice", "OpenOffice"]
        ],
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
            "Linux Distros requires a Set up before you can use them. It can be quite a Headache. But most Distros provide a Graphical Set up, which is fairly Easy.",
            "You can read about Setting Up Linux in Help Section.",
            "So, you want an Easier Set Up?"
        ]
    }
]