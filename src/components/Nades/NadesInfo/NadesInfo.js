import React from "react";
import './NadesInfo.css';

import mirageLogo from './mirageIcon.png';
const NadesInfo = () => {
    return(
        <div className='summaryBox'>
            <div className='summaryMessage'>
                <h1 className='nadesInfoH1'>Mirage Smokes</h1>
                <p>Liepajas Valsts tehnikuma studenta Nika Mestera gala darbs</p>
            </div>
            <div className='mapLogo'>
               <img className='mapLogoIMG' src = {mirageLogo} />
            </div>
        </div>
    )
}

export default NadesInfo;
