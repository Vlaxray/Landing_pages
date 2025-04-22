import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css'; // Stili personalizzati
import img2 from '../assets/alice-donovan-rouse-pZ61ZA8QgcY-unsplash.jpg';
import img1 from '../assets/dan-nistor-HE2ivjzHNP0-unsplash.jpg';
import img3 from '../assets/simon-berger--O8r5oLosYo-unsplash.jpg';


const LandingPage: React.FC = () => {
  return (
    <div>
      {/* HERO */}
      <section className="hero d-flex align-items-center justify-content-center text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">Scopri sentieri nascosti</h1>
          <p className="lead">Esplora la natura con EcoRunning Club – l’avventura ti aspetta.</p>
          <a href="#features" className="btn btn-success btn-lg mt-3">Inizia ora</a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Perché scegliere EcoRunning Club?</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <i className="bi bi-map-fill fs-1 text-success"></i>
              <h5 className="mt-3">Percorsi esclusivi</h5>
              <p>Scopri sentieri nascosti lontani dal turismo di massa.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-tree-fill fs-1 text-success"></i>
              <h5 className="mt-3">Natura autentica</h5>
              <p>Immergiti in ambienti naturali incontaminati.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-people-fill fs-1 text-success"></i>
              <h5 className="mt-3">Esperienze guidate</h5>
              <p>Condividi l’avventura con guide locali e appassionati.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="gallery py-5">
  <div className="container">
    <h2 className="text-center mb-4">Scatti dai nostri percorsi</h2>
    <div className="row g-3">
      <div className="col-6 col-md-4">
        <img src={img1} alt="trail-1" className="img-fluid rounded shadow-sm" />
      </div>
      <div className="col-6 col-md-4">
        <img src={img2} alt="trail-2" className="img-fluid rounded shadow-sm" />
      </div>
      <div className="col-6 col-md-4">
        <img src={img3} alt="trail-3" className="img-fluid rounded shadow-sm" />
      </div>
    </div>
  </div>
</section>



      {/* CTA FINALE */}
      <section className="cta text-white text-center py-5">
        <div className="container">
          <h2 className="mb-3">Pronto per partire?</h2>
          <p className="mb-4">Unisciti a migliaia di esploratori che amano la natura.</p>
          <a href="#features" className="btn btn-outline-light btn-lg">Iscriviti ora</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p className="mb-0">© 2025 EcoRunning Club. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
