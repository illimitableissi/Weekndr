import React from 'react';

const Section = (props) => {
    return (
        <div class="section white">
            <div class="row container">
                 <h2 class="header center" id="section" data-aos="fade-down" data-aos-offset="300">{props.albumName}</h2>
            </div>
      </div>
    );
};

export default Section;