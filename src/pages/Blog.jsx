import React, { useState, useEffect } from 'react';

function Blog() {
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
      <section 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px',
          textAlign: 'center',
          color: 'white'
        }}
      >
      </section>

      <h1 className='text-uppercase text-center my-3 text-1e1e1e'>Blog</h1>
      <p className='text-center '>Retrouvez ici quelques articles sur le développement web.</p>
      <div className='bg-primary mb-5 w-25 mx-auto' style={{ height: '5px' }}></div>
      
      <div className="container ro justify-content-start ">
<div className='card-group '>

        {/* Bloc 1 */}
        <div className='col-12 col-md-6 col-lg-4 px-1 pb-3'>
      <div className="card w-100 text-444" style={{ width: '18rem' }}>
  <img src="/blog/coder.jpg" 
       className="card-img-top" 
       alt="Photo d'un écran avec du code html"
       title="Codage HTML et CSS" />
  <div className="card-body">
    <h2 className="card-title">Coder son site en HTML/CSS</h2>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Lire la suite</a>
  </div>
  <div className="card-footer">
    Publié le 22 aout 2022
  </div>
</div>
</div>
 {/* Bloc 2 */}
 <div className='col-12 col-md-6 col-lg-4 px-1 pb-3'>
      <div className="card w-100 text-444" style={{ width: '18rem' }}>
  <img src="/blog/croissance.jpg" 
       className="card-img-top" 
       alt="Photo de pots de monnaie avec des plantes"
       title="Vendre ses produits sur le web" />
  <div className="card-body">
    <h2 className="card-title">Vendre ses produits sur le web</h2>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Lire la suite</a>
  </div>
  <div className="card-footer">
    Publié le 20 aout 2022
  </div>
</div>
</div> 
{/* Bloc 3 */}
        <div className='col-12 col-md-6 col-lg-4 px-1 pb-3'>
      <div className="card w-100 text-444" style={{ width: '18rem' }}>
  <img src="/blog/google.jpg" 
       className="card-img-top" 
       alt="Photo d'un ordinateur portable ouvert sur Google.com"
       title="Se positionnersur Google" />
  <div className="card-body">
    <h2 className="card-title">Se positionnersur Google</h2>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Lire la suite</a>
  </div>
  <div className="card-footer">
    Publié le 1 aout 2022
  </div>
</div>
</div> 
{/* Bloc 4 */}
        <div className='col-12 col-md-6 col-lg-4 px-1 pb-3'>
      <div className="card w-100 text-444" style={{ width: '18rem' }}>
  <img src="/blog/screens.jpg" 
       className="card-img-top" 
       alt="Photo d'un ordinateur fixe, portable et d'une tablette"
       title="Coder en responsive design" />
  <div className="card-body">
    <h2 className="card-title">Coder en responsive design</h2>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Lire la suite</a>
  </div>
  <div className="card-footer">
    Publié le 31 juillet 2022
  </div>
</div>
</div>
{/* Bloc 5 */}
<div className='col-12 col-md-6 col-lg-4 px-1 pb-3'>
      <div className="card w-100 text-444" style={{ width: '18rem' }}>
  <img src="/blog/seo.jpg" 
       className="card-img-top" 
       alt="Image sur fond bleu avec des mots clés SEO en blanc"
       title="Techniques de référencement" />
  <div className="card-body">
    <h2 className="card-title">Techniques de référencement</h2>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Lire la suite</a>
  </div>
  <div className="card-footer">
    Publié le 30 juillet 2022
  </div>
</div>
</div>     
{/* Bloc 6 */}
<div className='col-12 col-md-6 col-lg-4 px-1 pb-3'>
      <div className="card w-100 text-444" style={{ width: '18rem' }}>
  <img src="/blog/technos.png" 
       className="card-img-top" 
       alt="Mosaique de logos"
       title="Apprendre à coder" />
  <div className="card-body">
    <h2 className="card-title">Apprendre à coder</h2>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Lire la suite</a>
  </div>
  <div className="card-footer">
    Publié le 12 juillet 2022
  </div>
</div>
</div>


</div>
</div>

    </div>
  );
}

export default Blog;
