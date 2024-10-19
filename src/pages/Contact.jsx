import React from 'react';
import Map from '../components/Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div>
      {/* Image de fond */}
      <section
        style={{
          backgroundImage: `url('/contact-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '5px',
          position: 'relative',
          color: 'black',
        }}
      >
        {/* Ajout d'une couleur en transparence par dessus l'image de fond */}
        <div
          style={{
            backgroundColor: 'rgba(0, 105, 255, 0.5)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        ></div>

        {/* Bloc blanc */}
        <div className="container mt-3 mb-5 pb-5 shadow-lg bg-white rounded px-md-3 px-lg-5 position-relative text-444" style={{ zIndex: 1 }}>
          {/* Titre "Me contacter" */}
          <h1 className="text-uppercase text-center pt-5 text-1e1e1e">Me contacter</h1>
          <p className="text-center px-5">
                Pour me retrouver en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
              </p>
              <div className="bg-primary mb-5 w-25 mx-auto" style={{ height: '5px' }}></div>
          {/* Row pour le formulaire et les coordonnées */}
          <div className="row mt-5">
            {/* Bloc formulaire */}
            <div className="col-md-6">
             

              <div className="py-3 px-2">
                <h2 className="text-1e1e1e" id="form">
                  Formulaire de contact
                </h2>
                <div className="bg-primary" style={{ height: '2px' }}></div>
              </div>

              <form className="px-2 pt-3 pb-5 needs-validation" novalidate>
                <div className="form-group mb-3">
                  <input type="text" className="form-control" id="name" placeholder="Votre nom" required/>
                  <div className="invalid-feedback">Champ obligatoire.</div>
  </div>
               

                <div className="form-group mb-3">
                  <input type="email" className="form-control" id="email" placeholder="Votre adresse email" required/>
                  <div className="invalid-feedback">Champ obligatoire.</div>
                </div>

                <div className="form-group mb-3">
                  <input type="tel" className="form-control" id="tel" placeholder="Votre numéro de téléphone" required/>
                  <div className="invalid-feedback">Champ obligatoire.</div>
                </div>

                <div className="form-group mb-3">
                  <input type="text" className="form-control" id="subject" placeholder="Sujet" required/>
                  <div className="invalid-feedback">Champ obligatoire.</div>
                </div>

                <div className="form-group mb-4">
                  <textarea className="form-control" id="message" rows="5" placeholder="Votre message" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary mx-auto p-2 d-flex justify-content-center">
                  Envoyer
                </button>
              </form>
            </div>

            {/* Bloc coordonnées */}
            <div className="col-md-6">
              <div className="py-3 px-2">
                <h2 className="text-1e1e1e" id="form">
                  Mes coordonnées
                </h2>
                <div className="bg-primary" style={{ height: '2px' }}></div>

                {/* Adresse */}
                <div className="d-flex mt-3">
                <div>
                <FontAwesomeIcon icon={faLocationDot} style={{ width: '15px', height: '15px' }} alt="Icône Location" />   
                </div>
                  <div className="ms-2">
                    <address>
                      40 Rue Laure Diebold, 69009 Lyon, France
                    </address>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="d-flex">
                  <div>
                  <FontAwesomeIcon icon={faMobile} style={{ width: '15px', height: '15px' }} alt="Icône Mobile" />   
                  </div>
                   <div className="ms-2">
                    <a href="tel:0620304050" className="text-444">
                      06 20 30 40 50
                    </a>
                  </div>
                </div>

                {/* Carte Google Maps */}
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
