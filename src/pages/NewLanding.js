import React from 'react';
import { Link } from "react-router-dom";


const styles = {
    h1: {
        // marginTop: '25vh',
        color: 'lightgrey',
        display: 'inline-block',
        fontSize: '30px'
    },
    button: {
        // color: 'grey',
        // padding: '1%',
        backgroundColor: 'inherit',
        // borderColor: 'grey'
        display: "block",
        padding: "0.35em 1.2em",
        border: "0.1em solid black",
        margin: "0 0.3em 0.3em 0",
        borderRadius: "0.12em",
        boxSizing: "border-box",
        textDecoration: "none",
        fontWeight: "300",
        color: "black",
        textAlign: "center",
        transition: "all 0.2s",
        fontWeight: 'bold'
    },
    htmlstart: {
        color: 'CornflowerBlue',
        fontFamily: "cursive"

    },
    bodystart: {
        color: 'CornflowerBlue',
        fontFamily: "cursive",
        marginLeft: "13%"
    },
    h1start: {
        color: 'CornflowerBlue',
        marginTop: '20vh',
        fontFamily: "cursive",
        marginLeft: '20%'
    },
    h1end: {
        color: 'CornflowerBlue',
        fontFamily: "cursive",
        marginLeft: '20%'
    },
    buttonstart: {
        marginTop: '5%',
        color: 'CornflowerBlue',
        fontFamily: "cursive",
        marginLeft: '20%'
    },
    bodyend: {
        marginTop: '20vh',
        color: 'CornflowerBlue',
        fontFamily: "cursive",
        marginLeft: "13%"
    },
    container: {
        marginLeft: '10%'
    }
}
const tags = {
    htmlstart: "<html>",
    bodystart: "<body>",
    h1start: "<h1>",
    htmlend: "</html>",
    bodyend: "</body>",
    h1end: "</h1>",
    buttonstart: "<button>",
    buttonend: "</button>",
}
const Newlanding = () => {

    return (

        <>

            <br></br>
            <div className="container">
                <center>
                    <div class="typewriter">
                        <h1>Chase Lipscomb Web Developer</h1>
                    </div>
                </center>
                <center>
                <Link to="/Portfolio"><a href='/mywork/Portfolio'><button style={styles.button}
                        href='/mywork/Portfolio' onMouseOut={({ target }) => {
                            target.style.color = 'darkslategrey'
                            target.style.borderColor = 'darkslategrey'
                        }}
                        onMouseOver={({ target }) => {
                            target.style.color = 'white'
                            target.style.borderColor = 'white'
                        }}>View Work</button></a></Link>
                </center>
            </div>

        </>

    )
}
export default Newlanding