import React, { useState, useEffect } from 'react';

function Realisations() {
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

      <h1 className='text-uppercase text-center my-3 text-1e1e1e'>Portfolio</h1>
      <p className='text-center '>Voici quelques-unes de mes réalisations.</p>
      <div className='bg-primary mb-5 w-25 mx-auto' style={{ height: '5px' }}></div>
      <div className="container text-center  ">
<div className='card-group '>

        {/* Bloc 1 */}
        <div className='col-12 col-md-6 col-lg-4 px-1 pb-3'>
      <div className="card w-100 text-444" style={{ width: '18rem' }}>
  <img src="/portfolio/fresh-food.jpg" 
       className="card-img-top" 
       alt="Photo d'un panier de légumes"
       title="Réalisation d'un site avec commande en ligne" />
  <div className="card-body">
    <h2 className="card-title">Fresh food</h2>
    <p className="card-text">Réalisation d'un site avec commande en ligne.</p>
    <a href="#" className="btn btn-outline-primary">Voir</a>
  </div>
  <div className="card-footer">
    Site réalisé avec PHP et MySQL
  </div>
</div>
</div>
 {/* Bloc 2 */}
 <div className='col-12 col-md-6 col-lg-4 px-1 pb-3'>
      <div className="card w-100 text-444" style={{ width: '18rem' }}>
  <img src="/portfolio/restaurant-japonais.jpg" 
       className="card-img-top" 
       alt="Photo de sushis et makis"
       title="Restaurant Akira" />
  <div className="card-body">
    <h2 className="card-title">Restaurant Akira</h2>
    <p className="card-text">Réalisation d'un site vitrine.</p>
    <a href="#" className="btn btn-outline-primary">Voir</a>
  </div>
  <div className="card-footer">
    Site réalisé avec WordPress
  </div>
</div>
</div>
{/* Bloc 3 */}
<div className='col-12 col-md-6 col-lg-4 px-1 pb-3'>
      <div className="card w-100 text-444" style={{ width: '18rem' }}>
  <img src="/portfolio/espace-bien-etre.jpg" 
       className="card-img-top" 
       alt="Image zen avec des galets"
       title="Espace bien-être" />
  <div className="card-body">
    <h2 className="card-title">Espace bien-être</h2>
    <p className="card-text">Réalisation d'un site vitrine pour un patricien de bien-être.</p>
    <a href="#" className="btn btn-outline-primary">Voir</a>
  </div>
  <div className="card-footer">
    Site réalisé avec PHP et MySQL
  </div>
</div>
</div>



</div>
</div>
    </div>
  );
}

export default Realisations;