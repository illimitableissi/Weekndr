import React from 'react';
import AfterHours from '../Components/AfterHours'
import Melancholy from '../Components/Melancholy'
import StarBoy from '../Components/StarBoy'
import Madness from '../Components/Madness'
import KissLand from '../Components/KissLand'
import Trilogy from '../Components/Trilogy'
import Section from '../Components/Section'
import '../Pages/style.css'

const FullPage = () => {
    return (
        <div>
            <Section albumName="after hours." />
            <AfterHours />
            <Section albumName="my dear melancholy." />
            <Melancholy />
            <Section albumName="starboy." />
            <StarBoy />
            <Section albumName="beauty behind the madness." />
            <Madness />
            <Section albumName="kiss land." />
            <KissLand />
            <Section albumName="trilogy." />
            <Trilogy />
            <br></br>
            <div className="center">
            <a href="/"><img src="/images/xo.jpg" id="weeknd"></img></a>
            </div>
        </div>
    );
};

export default FullPage;