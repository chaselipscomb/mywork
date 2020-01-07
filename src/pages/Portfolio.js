import React, { useState } from 'react';
import joke from '../pictures/jokepicture.png';

const styles = {
    h1: {
        marginTop: '2%',
    }


}
const work = [
    {
        link: "https://herofinder.herokuapp.com/",
        image: "https://chaselipscomb.github.io/chaselipscomb5.github.io/assets/Herofinder.PNG",
        name: "Hero Finder"
    },
    {
        link: "https://chaselipscomb.github.io/Redux/",
        image: joke,
        name: "Joke Generator with Redux"
    },
    {
        link: "https://chaselipscomb.github.io/reacthw",
        image: "https://chaselipscomb.github.io/chaselipscomb5.github.io/assets/reacthw.PNG",
        name: "Employee Directory"
    },
    {
        link: "https://chaselipscomb.github.io/Password/",
        image: "https://chaselipscomb.github.io/chaselipscomb5.github.io/assets/passwordgenerator.PNG",
        name: "PasswordGenerator"
    },
    {
        link: "https://note-taker-uci.herokuapp.com/",
        image: "https://chaselipscomb.github.io/chaselipscomb5.github.io/assets/notetakerexpress.PNG",
        name: "Note Taker"
    },
    {
        link: "https://chaselipscomb.github.io/Planner/",
        image: "https://chaselipscomb.github.io/chaselipscomb5.github.io/assets/workdayscheduler.PNG",
        name: "Work Day Scheduler"
    },
    {
        link: "https://chaselipscomb.github.io/codequiz/",
        image: "https://chaselipscomb.github.io/chaselipscomb5.github.io/assets/Codingquiz.PNG",
        name: "Code Quiz"
    }
]
const Portfolio = () => {
    const [info1, setInfo1] = useState('')
    const [info2, setInfo2] = useState('')
    const [info3, setInfo3] = useState('')
    const [info4, setInfo4] = useState('')

    // const [info4, setInfo4] = useState('')

    return (
        <>
            <div className='portfoliocontainer'>
                <center><h1 style={styles.h1}>Portfolio</h1></center>
                <a href={work[0].link} ><img className='img1' src={work[0].image} alt={work[0].name} onMouseOver={(event) => setInfo1(event.target.alt)} /></a>
                <a href={work[1].link}><img className='img1' src={work[1].image} alt={work[1].name} onMouseOver={(event) => setInfo1(event.target.alt)} /></a>
                <div className='info'><center><h3 className='infos' ><b>{info1}</b></h3></center></div>
                <a href={work[2].link}><img className='img1' src={work[2].image} alt={work[2].name} onMouseOver={(event) => setInfo2(event.target.alt)} /></a>
                <a href={work[3].link}><img className='img1' src={work[3].image} alt={work[3].name} onMouseOver={(event) => setInfo2(event.target.alt)} /></a>
                <div className='info'><center><h3 className='infos' ><b>{info2}</b></h3></center></div>
                <a href={work[4].link}><img className='img1' src={work[4].image} alt={work[4].name} onMouseOver={(event) => setInfo3(event.target.alt)} /></a>
                <a href={work[5].link}><img className='img1' src={work[5].image} alt={work[5].name} onMouseOver={(event) => setInfo3(event.target.alt)} /></a>
                <div className='info'><center><h3 className='infos' ><b>{info3}</b></h3></center></div>
                <center><a href={work[6].link} ><img className='img1' src={work[6].image} alt={work[6].name} onMouseOver={(event) => setInfo4(event.target.alt)} /></a></center>
                <div className='info'><center><h3 className='infos' ><b>{info4}</b></h3></center></div>
                
            </div>
        </>
    )
}
export default Portfolio