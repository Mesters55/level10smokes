import React from "react";
import './NadesInfo.css';

import mirageLogo from './mirageIcon.png';
const NadesInfo = (props) => {
    return(
        <div className='summaryBox'>
            <div className='summaryMessage'>
                <h1 className='nadesInfoH1'>Level 10 Smokes</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                     a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className='mapLogo'>
               <img className='mapLogoIMG' src = {mirageLogo} />
            </div>
        </div>
    )
}

export default NadesInfo;
