import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [backgroundImage, setBackgroundImage] = useState('/hero-bg-mobile.jpg');

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setBackgroundImage('/hero-bg-mobile.jpg'); 
    } else if (width < 992) {
      setBackgroundImage('/hero-bg-tablette.jpg'); 
    } else {
      setBackgroundImage('/hero-bg.jpg'); 
    }
  };

  const ProgressBar = ({ skill, percentage, color, ariaLabel }) => {
    return (
      <div className="pb-3">
        <p className="text-uppercase">{skill} {percentage}%</p>
        <div className="progress mt-n1" role="progressbar" aria-label={ariaLabel} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
          <div className={`progress-bar ${color}`} style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='home'>

      {/* Bloc image */}
      <div 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          padding: '200px 0',
          textAlign: 'center',
          color: 'white'
        }}
      >
        <div className="overlay"></div>
        <div className="text-content">
        <h1>Bonjour, je suis John Doe</h1>
        <h2 className='py-3'>Développeur web full stack</h2>
        <button 
        type="button" 
        className="btn btn-primary"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
>
  En savoir plus
</button>
      </div>
      </div>

{/* Bloc blanc */}

      <div className="py-4 px-md-5 pt-lg-5">
        <div className="shadow-lg p-3 bg-body-tertiary rounded row p-md-5">
        <div className="col-12 col-sm-6">
          <h3 className="border-bottom border-primary border-3 py-3 text-1e1e1e" id="about">À propos</h3>
          <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. 
            Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
          <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>
          <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
         
          </div>

          <div className="col-12 col-sm-6">
          <img src="/john-doe-about.jpg" className="img-fluid rounded" alt="John Doe, homme en train de travailler dans un bureau, concentré sur son ordinateur" title="John Doe développeur web"/>
          <h3 className="py-2 text-1e1e1e">Mes compétences</h3>
          <ProgressBar skill="HTML5" percentage="90" color="bg-danger" ariaLabel="Barre de 90% pour le HTML5" />
          <ProgressBar skill="CSS3" percentage="80" color="bg-info" ariaLabel="Barre de 80% pour le CSS3" />
          <ProgressBar skill="Javascript" percentage="70" color="bg-warning" ariaLabel="Barre de 70% pour le Javascript" />
          <ProgressBar skill="PHP" percentage="60" color="bg-success" ariaLabel="Barre de 60% pour le PHP" />
          <ProgressBar skill="React" percentage="50" color="" ariaLabel="Barre de 50% pour React" />
        </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
