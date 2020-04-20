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
            <Section albumName="After Hours" />
            <AfterHours />
            <Section albumName="My Dear Melancholy" />
            <Melancholy />
            <Section albumName="Star Boy" />
            <StarBoy />
            <Section albumName="Beauty Behind the Madness" />
            <Madness />
            <Section albumName="Kiss Land" />
            <KissLand />
            <Section albumName="Trilogy" />
            <Trilogy />
        </div>
    );
};

export default FullPage;