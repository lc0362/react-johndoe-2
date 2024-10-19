import React, { useState, useEffect } from 'react';
import './Services.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';


function Services() {
  const [backgroundImage, setBackgroundImage] = useState('/banner-mobile.jpg');

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setBackgroundImage('/banner-mobile.jpg'); 
    } else if (width < 992) {
      setBackgroundImage('/banner-tablette.jpg'); 
    } else {
      setBackgroundImage('/banner.jpg'); 
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px',
          textAlign: 'center',
          color: 'white'
        }}
      >
      </div>

      <div>
        <h1 className='text-uppercase text-center mt-5 text-1e1e1e'>Mon offre de services</h1>
        <p className='text-center '>Voici les prestations sur lesquelles je peux intervenir.</p>
        <div className='bg-primary mb-5 w-25 mx-auto' style={{ height: '5px' }}></div>
      </div>

      <div className='text-center'>
        <div className="container">
          <div className="row">

            {/* Bloc UX Design */}
            <div className="col-12 col-md-4 py-2 d-flex">
              <div className='py-5 px-3 shadow-lg bg-white rounded service-bloc'>
              <FontAwesomeIcon icon={faDisplay} style={{ width: '50px', height: '50px' }} alt="Icône Ordinateur" className='icon' />
                <h2 className='text-uppercase my-3 fs-4 fs-md-3 fs-lg-2 text-1e1e1e'>UX Design</h2>
                <p>L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
              </div>
            </div>

            {/* Bloc Développement Web */}
            <div className="col-12 col-md-4 py-2 d-flex">
              <div className='py-5 px-3 shadow-lg bg-white rounded service-bloc '>
              <FontAwesomeIcon icon={faFileCode} style={{ width: '50px', height: '50px' }} alt="Icône Page de code" className='icon' />
                <h2 className='text-uppercase my-3 fs-4 fs-md-3 fs-lg-2 text-1e1e1e'>Développement Web</h2>
                <p>Le <strong>développement de sites web</strong> repose sur l'utilisation des langages <u>HTML</u>, <u>CSS</u>, Javascript et <u>PHP</u>.</p>
              </div>
            </div>

            {/* Bloc Référencement */}
            <div className="col-12 col-md-4 py-2 d-flex">
              <div className='py-5 px-3 shadow-lg bg-white rounded service-bloc'>
              <FontAwesomeIcon icon={faMagnifyingGlassDollar} style={{ width: '50px', height: '50px' }} alt="Icône Loupe et dollar" className='icon'/>

                <h2 className='text-uppercase my-3 fs-4 fs-md-3 fs-lg-2 text-1e1e1e'>Référencement</h2>
                <p>Le <strong>référencement naturel d'un site</strong>, aussi appelé <u>SEO</u>, consiste à mettre des techniques en œuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Services;
