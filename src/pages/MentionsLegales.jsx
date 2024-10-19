import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


function MentionsLegales() {
  return (
    
    
    <div className="px-3">
     
      <h1 className='text-uppercase text-center my-3'>Mentions légales</h1>
      <div className='bg-primary mb-5 w-25 mx-auto' style={{ height: '5px' }}></div>

      
      <div className="accordion" id="accordionExample">
        
        {/* Section 1: Éditeur du site */}
        <div className="accordion-item text-444">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Éditeur du site
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <h2>John Doe</h2>
              
              {/* Adresse */}
              <div className="d-flex"> 
              <div>
  <FontAwesomeIcon icon={faLocationDot} style={{ width: '15px', height: '15px' }} alt="Icône Location" />
  </div>
     <div className="ms-2">
    <address>
      40 Rue Laure Diebold 
      <div>69009 Lyon, France</div>
    </address>
  </div>
</div>

              
             {/* Téléphone */}
             <div className="d-flex ">
             <div>
                  <FontAwesomeIcon icon={faMobile} style={{ width: '15px', height: '15px' }} alt="Icône Mobile" /> 
                  </div>
                <div className="ms-2">
                  <a href="tel:0620304050">06 20 30 40 50</a>
                </div>
              </div>
              
              {/* Email */}
              <div className="d-flex">
              <div>
              <FontAwesomeIcon icon={faEnvelope} style={{ width: '15px', height: '15px' }} alt="Icône Email" /> 
              </div>
                <div className="ms-2">
                  <a href="mailto:john.doe@gmail.com"> john.doe@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Hébergeur */}
        <div className="accordion-item text-444">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Hébergeur
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">


      <h2>Always Data</h2>
                <p> 91 rue du Faubourg Saint-Honoré 
                  <div>75008 Paris</div>
                </p>
       {/* Lien */}
       <div className="d-flex">
                <div>
                <FontAwesomeIcon icon={faGlobe} style={{ width: '15px', height: '15px' }} alt="Icône Globe" /> 
                </div>
                <div className="ms-2">
                  <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer"> www.alwaysdata.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Crédits */}
  <div className="accordion-item text-444">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Crédits
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <h2>Crédits</h2>
                <p> Site développé par John Doe, étudiant du CEF.</p>
                <p> Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/" target="_blank" rel="noopener noreferrer"> Pixabay</a>.</p>


                 </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default MentionsLegales;
