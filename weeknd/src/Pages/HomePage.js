import React from 'react';
import '../Pages/style.css'

const HomePage = () => {
    return (
        <div className="homeWrapper">
            <div className="container center">
            <img src="/images/xo.jpg" id="weeknd"></img>
            <br></br>
            <div className="row">
            <a href="/albums" className="waves-effect black btn">View Albums</a>
            </div>
            </div>
        </div>
    );
};

export default HomePage;