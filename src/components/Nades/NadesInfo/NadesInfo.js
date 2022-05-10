import React from "react";
import './NadesInfo.css';

import mirageLogo from './mirageIcon.png';
const NadesInfo = () => {
    return(
        <div className='summaryBox'>
            <div className='summaryMessage'>
                <h1 className='nadesInfoH1'>Level 10 Smokes</h1>
                <p>Lietotāju kopiena paradzēta "CSGO" spēles entuziastiem. Šeit Jūs varat iegūt daudz un dažādu padomu un pilnveidot sevi, kā spēlētāju!</p>
            </div>
            <div className='mapLogo'>
               <img className='mapLogoIMG' src = {mirageLogo} alt="mapLogoIMGnotFound" />
            </div>
        </div>
    )
}

export default NadesInfo;
