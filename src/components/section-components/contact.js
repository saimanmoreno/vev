import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class Contact extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    // let imagealt = 'image'

    return (
      <div>
        <div className="contact-area pd-top-108">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-lg-center text-left">
                  <h2 className="title">Póngase en contacto con nosotros</h2>
                  <p>Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-5 offset-xl-1 col-lg-6">
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="thumb">
                  <img src={publicUrl + "assets/img/vev-logo.png"} alt="img" />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <form className="tp-form-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <label className="single-input-wrap style-two">
                        <span className="single-input-title">Nombre</span>
                        <input type="text" name="name" />
                      </label>
                    </div>
                    <div className="col-md-6">
                      <label className="single-input-wrap style-two">
                        <span className="single-input-title">Telefono</span>
                        <input type="text" name="number" />
                      </label>
                    </div>
                    <div className="col-lg-12">
                      <label className="single-input-wrap style-two">
                        <span className="single-input-title">Email</span>
                        <input type="text" name="email" />
                      </label>
                    </div>
                    <div className="col-lg-12">
                      <label className="single-input-wrap style-two">
                        <span className="single-input-title">Mensaje</span>
                        <textarea defaultValue={""} name="message" />
                      </label>
                    </div>
                    <div className="col-12">
                      <input type="submit" className="btn btn-yellow" value="Enviar mensaje" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact