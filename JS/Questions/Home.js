import React from 'react';

function Home({questionNumber, setQuestionNumber}) {
    const start = () => {
        setQuestionNumber(questionNumber + 1);
    }
    
    return (
        <div className="home">
            <h1>LinuxDistro4U</h1>
            <p>Find the best Linux Distro for yourself</p>
            
            {/* <IconButton className="home__continue" onClick={start}>
                <ArrowForwardIosRounded />
            </IconButton> */}
        </div>
    )
}

export default Home
