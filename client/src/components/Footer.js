import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className='app-footer'>
        <footer className="page-footer font-small blue pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Jesters Esports</h5>
                <p>
                  Iniciando como una comunidad gamer en el año 2020,<br/> 
                  dimos todo para convertirnos en la organización de Esports que somos hoy en día.<br/>
                  Desde la competencia profesional, hasta la capacitación gratuita en Desarrollo de Software<br/>
                  nacimos para ser los mejores, sin alejarnos del compromiso social que nos caracteriza
                </p>
              </div>

              <hr className="clearfix w-100 d-md-none pb-0" />

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Redes Sociales</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://twitter.com/JestersEsports">Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/jestersesports/">Instagram</a>
                  </li>
                  <li>
                    <a href="#!">YouTube</a>
                  </li>
                  <li>
                    <a href="#!">TikTok</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/TwGqewVA">Discord</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Sponsors</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">nolock</a>
                  </li>
                  <li>
                    <a href="#!">ModernGrid</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            © 2020 Copyright
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
