import React from 'react';
import AfterHours from '../Components/AfterHours'
import Melancholy from '../Components/Melancholy'
import StarBoy from '../Components/StarBoy'
import Madness from '../Components/Madness'
import KissLand from '../Components/KissLand'
import Trilogy from '../Components/Trilogy'
import Section from '../Components/Section'
import '../Pages/style.css'
import albums from '../albums.js'

const FullPage = () => {
    return (
        <div>
            <Section albumName={albums[0].albumName} />
            <AfterHours />
            <Section albumName={albums[1].albumName} />
            <Melancholy />
            <Section albumName={albums[2].albumName} />
            <StarBoy />
            <Section albumName={albums[3].albumName} />
            <Madness />
            <Section albumName={albums[4].albumName}/>
            <KissLand />
            <Section albumName={albums[5].albumName} />
            <Trilogy />
            <br></br>
            <div className="center">
            <a href="/"><img src="./images/xo.jpg" id="weeknd"></img></a>
            </div>
        </div>
    );
};

export default FullPage;