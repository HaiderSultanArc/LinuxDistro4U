import firebase_admin
from firebase_admin import firestore

app = firebase_admin.initialize_app(
    options={
        'storageBucket': 'linux-distro-4u.appspot.com'
    }
)

db = firestore.client(app=app)

questions = [
    {
        "questionNumber": 0,
        "type": "other",
        "question": "LinuxDistro4U",
        "options": ["Find the best Linux Distro for yourself"],
        "values": [0],
        "classes": [
            [""],
        ],
        "max-selection": 0,
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
        "values": [0],
        "classes": [
            [""],
        ],
        "max-selection": 0,
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
        ],
        "help-content": [
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur."     
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
        ],
        "help-headings": [
            "CARDS",
            "DEB",
            "ENTROPY",
            "FLATPAK",
            "NIX",
            "PACMAN",
            "PET",
            "PORTAGE",
            "RPM",
            "SNAP",
            "SRC",
            "TAZPKG",
            "TAR.XZ",
            "TCE",
            "TLZ",
            "TXZ",
            "XBPS"
        ],
        "help-content": [
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur." 
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
        ],
        "help-headings": [
            "CALLIGRA",
            "GOFFICE",
            "KOFFICE",
            "LIBREOFFICE",
            "OPENOFFICE"
        ],
        "help-content": [
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus natus harum doloribus aliquam mollitia reiciendis, illum explicabo quas libero soluta, laboriosam aut vitae ut odio! Sit molestiae inventore porro consectetur."
        ]
    },
    {
        "questionNumber": 0,
        "type": "other",
        "values": [0],
        "classes": [
            [""],
        ],
        "max-selection": 0,
        "question": "Yes/No Type Questions",
        "options": ["Select The Features and Benefits You Like"],
        "speech": [
            "This is more Critical and Decisive Section for me to give you a better Suggestion.",
            "Although you can still skip any question but I highly reocommend NOT DOING THAT. You can consult Help Section if you feel like.",
            "With that being said, let's continue."
        ],
        "help-headings": [
            "YES NO TYPE QUESTIONS",
            "DECISIVE SECTION",
            "SKIPPING THE QUESTIONS"
        ],
        "help-content": [
            "In this type Arc'Ion will ask you about some Features and you will have 3 options from which you have to Choose 1; YES, NO and May or May not be.",
            "This is most Critical and Decisive Section. This will define the Features of the Linux Distro that Arc'Ion will be Suggesting.",
            "You can still skip the Question aka Select May or May not be, but this is not Recommended. Please Try to Answer maximum of the Questions."
        ]
    },
    {
        "questionNumber": 5,
        "type": "yesNo",
        "question": "Do You want your Distro to be Beginner Friendly?",
        "options": [
            "Yes",
            "No",
            "May or May not be"
        ],
        "values": [50],
        "classes": [
            [""]
        ],
        "max-selection": 1,
        "speech": [
            "Linux can be quite a handful when it comes to difficulty. But Some Distros are Specifically focused on Begginers.",
            "You can Check in Help Section to see which Distros are Begginner Friendly",
            "So Do you want it as a YES?"
        ],
        "help-headings": [
            "BEGINNER FRIENDLY DISTROS",
            "BENIFITS"
        ],
        "help-content": [
            "Beginner Friendly means the Distro is easy to use for the Person who has no or a little knowledge about Linux.",
            "This can be very helpful as switching to a completely new Environment can be very confusing. Linux particularly is a Difficult Operating System, but Linux has some Very easy and Beginner Friendly Distros while still retaining much it's Legacy, Security and Control."
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
        "classes": [
            [""]
        ],
        "max-selection": 1,
        "speech": [
            "Linux is Free and Open-Source, but being 100% Free is not true for Linux as well, but some of the Distros truely hold the name for being 100% Free",
            "I want to mention that being 100% Free does'nt necassarily means a Good Thing. You might actually don't want that. Consult the Help Section to find out the Drawbacks.",
            "So you want your Distro to be 100% Free?"
        ],
        "help-headings": [
            "FREE DISTROS",
            "BENIFITS",
            "DRAWBACKS"
        ],
        "help-content": [
            "Free Distros means the Distros that are 100% Free, which are Recommended and Endorsed by The Free Software Foundation.",
            "These distros are ready-to-use full systems whose developers have made a commitment to follow the Guidelines for Free System Distributions. This means they will include, and propose, exclusively free software. They will reject nonfree applications, nonfree programming platforms, nonfree drivers, nonfree firmware “blobs”, nonfree games, and any other nonfree software, as well as nonfree manuals or documentation.",
            "This can be problematic for some Users who want to use the Softwares that are not Free. This includes any Software that requires some kind of Payment from Users. Linux is Generally Free but it also it does'nt mean you can't use Non-free softwares on this Platform. Same can not be said for the Distros that claims to be 100% free."
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
        "classes": [
            [""]
        ],
        "max-selection": 1,
        "speech": [
            "Linux can require some testing and prior Knowledge before starting. Don't worry, you can just install Distros, with Live Feature, on a USB and Test it as much as you want before actually switching to it.",
            "It's a pretty handy feature most of Linux Distros provide. If You want to know which Linux Distro provides this feature you can check the Help Section.",
            "So, do you want to test it or it does'nt matter?"
        ],
        "help-headings": [
            "LIVE DISTROS",
            "BENEFITS"
        ],
        "help-content": [
            "These Distros provide you with a Feature of running the whole Distro, from boot to all the Functionality, right from the USB or a CD/DVD, without making any changes to your own Operating System.",
            "This can be very helpful for Testing purposes. Suppose you respond well and Arc'Ion suggests you a Distro, you can Test it before actually switching to it, by downloading it in your USB or CD/DVD and run live on your Computer along with your current OS, without any changes to your current OS. Moreover you can use it completely like that aside from testing. You don't event have to worry about the Storage Drive or Machine. Just plug it in and run your Linux on any Machine."
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
        "classes": [
            [""]
        ],
        "max-selection": 1,
        "speech": [
            "Linux is generally a lightweight OS. But some of it's Distros are Lightweight enough to run on a very lower end machine or a Raspberry Pi.",
            "Every Linux Distro is Lightweight some are just extra light. You can chech about them in Help Section.",
            "So, You want to run a Raspberry Pi or a very lower end PC?"
        ],
        "help-headings": [
            "LIGHT-WEIGHT DISTRO",
            "LOWER END PC",
            "RASPBERRY PI"
        ],
        "help-content": [
            "Linux is a Light Weight OS, but still all of it's Distros are not meant to run on very Lower End PCs and Raspberry Pi, but some are so light-weight that they can run on them and give life to them. These Distros are not Bulked with Unneccassary stuff and do not Flex much on their UI. They keep it simple and light.",
            "Lower End PCs are the machines with low specs that can not run a modern OS at it's full potential. They are used for daily simple usage like Movies, Songs, Seasons and Browsing Internet etc.",
            "The Raspberry Pi is a low cost, credit-card sized computer that plugs into a computer monitor or TV, and uses a standard keyboard and mouse. It is a capable little device that enables people of all ages to explore computing, and to learn how to program in languages like Scratch and Python. It’s capable of doing everything you’d expect a desktop computer to do, from browsing the internet and playing high-definition video, to making spreadsheets, word-processing, and playing games."
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
        "classes": [
            [""]
        ],
        "max-selection": 1,
        "speech": [
            "Linux is Known for Security and Privacy. So it's naturally an option for a Server Machine.",
            "Some Distros are specially designed to work both as Server and Desktop. Hence very versatile. You can learn more about them in Help Section.",
            "So, are you gonna make your PC a Server as well?"
        ],
        "help-headings": [
            "SERVER DISTROS",
            "BENEFITS",
            "DRAWBACKS"
        ],
        "help-content": [
            "Linux is Known for Security and Privacy. So it's naturally an option for a Server Machine. A server is a computer software or a machine that offers services to other programs or devices, referred to as “clients“. There are different types of servers: web servers, database servers, application servers, cloud computing servers, file servers, mail servers, DNS servers and much more.",
            "This can be useful if you are working on Servers or want a Server in General. Linux is Free and Open Source which means you can check for Erros and Bugs and improve the Security on your own as well. It's also Stable, Reliable and Flexible.",
            "Servers can be quite bulky and heavy which means they require significant resources to work properly."
        ]
    },
    {
        "questionNumber": 10,
        "type": "yesNo",
        "question": "Do you want your Distro to have an Easy Set Up?",
        "options": [
            "Yes",
            "No",
            "May or May not be"
        ],
        "values": [50],
        "classes": [
            [""]
        ],
        "max-selection": 1,
        "speech": [
            "Linux Distros requires a Set up before you can use them. It can be quite a Headache. But most Distros provide a Graphical Set up, which is fairly Easy.",
            "You can read about Setting Up Linux in Help Section.",
            "So, you want an Easier Set Up?"
        ],
        "help-headings": [
            "EASY SET UP",
            "BENEFITS"
        ],
        "help-content": [
            "Easy Set Up means a Graphical Wizard that leads you through the Installation Process.",
            "It is easy to follow and helps new users to not mess the things up."
        ]
    },
    {
        "questionNumber": 11,
        "type": "yesNo",
        "question": "Do you want your Distro to work on Old Computers?",
        "options": [
            "Yes",
            "No",
            "May or May not be"
        ],
        "values": [50],
        "classes": [
            [""]
        ],
        "max-selection": 1,
        "speech": [
            "Linux can really put life in some dead machines. Remember your Old School Computer on which you played Sega Genesis Games in 90s? Well why not try firing it up again?",
            "Remember that if a distro can run on old computers it does'nt necassarily means it's specifically made for old Computers, it will work just fine on any Modern Machine as well.",
            "So you want to give life to some old stuff?"
        ],
        "help-headings": [
            "OLD COMPUTERS"
        ],
        "help-content": [
            "Well there's no hard definition of an Old Computer, it's just that you can tell if a computer is old or not. In general x86 and early x64 Architecture would be considered old computers"
        ]
    },
    {
        "questionNumber": 12,
        "type": "yesNo",
        "question": "Do you want your Distro to Support Gaming?",
        "options": [
            "Yes",
            "No",
            "May or May not be"
        ],
        "values": [50],
        "classes": [
            [""]
        ],
        "max-selection": 1,
        "speech": [
            "Linux isn't the best option when it comes to Gaming. That title goes to Windows. Nevertheless there are a few Distros that can actually provide a Good Gaming Experience",
            "Go to Help Section to learn more about Gaming on Linux",
            "So you want Gaming on Linux?"
        ],
        "help-headings": [
            "GAMING",
            "BENEFITS"
        ],
        "help-content": [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sunt doloremque. Consectetur illo, nisi praesentium facere et dolorem obcaecati enim!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur debitis odit quidem accusamus eveniet rerum laudantium itaque. Mollitia, natus?"
        ]
    },
    {
        "questionNumber": 0,
        "type": "result",
        "question": "",
        "options": [
            "Depending on your responses, I think this is the best Distro 4U"
        ],
        "values": [0],
        "classes": [
            [""],
        ],
        "max-selection": 0,
        "speech": [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quae similique asperiores numquam quo id, ipsam consectetur esse minus quas.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia unde error reprehenderit molestias quidem aut quae, facilis mollitia eum adipisci.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, veritatis a quae laboriosam maiores fuga eius eaque corrupti impedit perferendis!"
        ],
        "help-headings": [
            ""
        ],
        "help-content": [
            ""
        ]
    }
]

try:
    for question in questions:
        db.collection('questions').document().set(
            {
                "questionsNumber": question["questionNumber"],
                "type": question["type"],
                "question": question["question"],
                "options": question["options"],
                "values": question["values"],
                "classes": question["classes"],
                "max-selection": question["max-selection"],
                "speech": question["speech"],
                "help-headings": question["help-headings"],
                "help-content": question["help-content"]
            }
        )
except Exception as error:
    print(error)
