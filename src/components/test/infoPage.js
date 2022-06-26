import "./info.css";
import emailjs from 'emailjs-com'
import React, { useState } from "react";

const Info = () =>{


    const [showSent, setShowSent] = useState(false);
    //Funkcija, kas izpildās uz onSubmit, tādējādi aizsūtot ēpastu uz niks.mesters.lvt@gmail.com

    function sendEmailHandler(e){
        setShowSent(true);
        e.preventDefault();
        emailjs.sendForm('service_zri1tlh',
         'template_xlunnpz',
          e.target,
        'KwXSJmBn2_vnF0ZNI').then(res =>{
            console.log(res);
        }).catch(err=> console.log(err));
    }

    return(
      <div className="content">
          <div className="container">
              <div className="rowAlign">
                  <div className='col'>
                      <div className="form">
                          <h3 className="h3Name">Sazinies!</h3>
                          {showSent ? <div>Vēstule nosūtīta !</div> : <div></div>}
                          <form className="form" onSubmit={sendEmailHandler}>
                                <div className = "row">
                                    <div className="colForm">
                                        <label className='formLabel'>Vārds *</label>
                                        <input type = "text" name = "name" className="inputForm" placeholder="Jūsu vārds" />
                                    </div>
                                    <div className="colForm">
                                        <label className='formLabel'>Ēpasts *</label>
                                        <input type = "email" name = "email" className="inputForm" placeholder="Jūsu ēpasts" />
                                    </div>
                                </div>
                                <div className = "row">
                                    <div className="colForm">
                                        <label className='formLabel'>Ziņa *</label>
                                        <textarea name='message' tpye = 'text' cols="4" rows="4" className="inputForm2" placeholder="Jūsu ziņa..." />
                                    </div>
                                </div>
                                <div className="row">
                                    <button type="submit" value ="send" className="button-18" >Sūtīt!</button>
                                </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}
export default Info;
