import React from 'react';

export default function Home() {
  return (
    <div>
      <div className="container">
        {/* home*/}
        <div className="row">
          <div className="col-12">
            <img
              src="/paintball1.png"
              alt="Paintball Action"
              className="mt-3 img-fluid rounded"
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Sección de imágenes y botón */}
        <div className="row mt-4 d-flex justify-content-center text-center">
          <div className="col-12 mb-3">
            <button className="btn btn-primary btn-lg" style={{ backgroundColor: "#2C3E50", color: "#fff", border: "none", }} >Reservar Ahora</button>
          </div>

          {/*imagenes */}
          <div className="col-md-3 col-6">
            <img
              src="/paintball2.png"
              alt="Paintball Match"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-3 col-6">
            <img
              src="/paintball3.png"
              alt="Paintball Team"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-3 col-6 mt-md-0 mt-3">
            <img
              src="/paintball4.png"
              alt="Paintball Players"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
