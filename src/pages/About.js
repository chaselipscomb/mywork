import React from 'react';

const styles = {
    image: {
        width: '25%',
        minWidth: '250px',
        height: '25%',
        minHeight: '250px',
        borderRadius: '25%',
        borderColor: 'black',
        borderWidth: '5px',
        borderStyle: "solid",
    },
    ptag: {
        fontSize: '25px',
        fontWeight: '940',
        lineHeight: '26px',
        marginBottom: '-8%'
    },
    grey: {
        color: 'slategrey'
    },
    atag: {
        marginTop: '20px'
    }
}



const About = () => {

    return (

        <>
            <div className='portfoliocontainer'>
                <div className="aboutcontainer">
                    <div className="aboutleftside">
                        <img src='https://avatars0.githubusercontent.com/u/54956992?s=460&v=4' alt='picture' style={styles.image} />
                        <h1 style={styles.grey}>.</h1>
                    </div>
                    <div className="aboutrightside">
                        <center>
                            <div class="typewriter">
                                <p style={styles.ptag}><span className='aboutspan'>I am a </span>Front-End Developer...</p>
                            </div>
                            <p className='ptag2' >I enjoy creating responsive designs and have the ability to communicate well with team members to minimize debugging and downtime. Some of my skills include mobile first design, concentrated Javascript, and client/server logic. I am dedicated to furthering my knowlege of Web Development and providing user friendly applications.</p>
                            <p style={styles.ptag2}>Core Compentencies: HTML/CSS, JavaScript, jQuery, React, Redux, MySQL, MongoDB, Node, Express, Git, Bash</p>
                        </center>
                    </div>
                </div>
                <center>
                    <h3>Contact Me: </h3>
                    <div>Email: <span>chaselipscomb97@gmail.com</span></div>
                    <div>Mobile: <span>(949) 233-5881</span></div>
                    <br></br>
                    <a href="https://www.keepandshare.com/doc10/28963/chase-s-resume-1-docx-9k?da=y" download><button>Download Resume</button></a>
                </center>

            </div>
        </>
            )
        }
export default About