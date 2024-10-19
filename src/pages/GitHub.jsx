import React, { useState, useEffect } from 'react';
import ApiGithub from '../components/ApiGithub';

function GitHub() {
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
      {/* Bannière */}
      <div 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px',
          textAlign: 'center',
          color: 'white',
        }}
      >
      </div>

      <h1 className="text-uppercase text-center my-3">Profil GitHub de John Doe</h1>
      <p className="text-center">Informations récupérées depuis l'API GitHub.</p>
      <div className="bg-primary mb-5 w-25 mx-auto" style={{ height: '5px' }}></div>
      
      <div className="container text-center">
        <ApiGithub />
      </div>
    </div>
  );
}

export default GitHub;
