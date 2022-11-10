import logo from './static/logo-ades.png';
import img1 from "./static/carrusel4.jpg"
import img2 from "./static/carrusel2.jpg"
import img3 from "./static/carrusel3.jpg"

import imgForm from "./static/terapia-psicologica-mujer-hombre.webp"
import './App.css';

function App() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" width={150} height={50} />
            </a>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Acerca de nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contactanos</a>
                </li>
              </ul>
            </div>
          </div></nav>
        <div>
          <div className="container">
            <div className="row">
              <div className="col">
                {/*-----Carrusel----*/}
                <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={img1} className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Nuestros servicios</h5>
                        <p>Terapia en grupo.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={img2} className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Nuestros servicios</h5>
                        <p>Terapia individual con perspectiva de género.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={img3} className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Nuestros servicios</h5>
                        <p>Terapia infantil</p>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={imgForm} className="img-thumbnail" alt="..." />
              </div>
              <div className="col-6 col-md-4">
                <div className="container-fluid">
                  <div className="card">
                    <div className="card-header">Contáctanos</div>
                    <div className="card-body">
                      <form>
                        {/* Input type text */}
                        <div className="form-group">
                          <label htmlFor="name">Nombre</label>
                          <input type="text" className="form-control" name="name" id="name" />
                        </div>
                        {/* Input type text */}
                        <div className="form-group">
                          <label htmlFor="lastName">Apellidos</label>
                          <input type="text" className="form-control" name="lastName" id="lastName" />
                        </div>
                        {/* Input type text */}
                        <div className="form-group">
                          <label htmlFor="contactPhone">Número de contacto</label>
                          <input type="number" className="form-control" name="contactPhone" id="contactPhone" />
                        </div>
                        {/* Input type text */}
                        <div className="form-group">
                          <label htmlFor="mail">Correo electrónico</label>
                          <input type="email" className="form-control" name="mail" id="mail" />
                        </div>
                        {/* textarea */}
                        <div className="form-group">
                          <label htmlFor="message">Mensaje</label>
                          <textarea className="form-control" rows={3} name="message" id="message" defaultValue={""} />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary" name="button_id_5" id="button_id_5">Enviar</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="text-center text-lg-start bg-light text-muted">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <a href className="me-4 text-reset">
                <i className="fab fa-facebook-f" />
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-twitter" />
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-google" />
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-instagram" />
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-linkedin" />
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-github" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className>
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3" />Company name
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Angular</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">React</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Vue</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Laravel</a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Pricing</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Settings</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Orders</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Help</a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i className="fas fa-home me-3" /> New York, NY 10012, US</p>
                  <p>
                    <i className="fas fa-envelope me-3" />
                    info@example.com
                  </p>
                  <p><i className="fas fa-phone me-3" /> + 332 56 17 19</p>
                  <p><i className="fas fa-print me-3" /> + 38 34 49 52</p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2022 Copyright:
            <a className="text-reset fw-bold" href>NucleoAdes.com</a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
    </>

  );
}

export default App;
