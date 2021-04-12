import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import emailjs from "emailjs-com";

function Contact() {
  const [formdata, setFormdata] = useState({
    nombre_interesado: "",
    email_interesado: "",
    titulo_correo: "",
    mensaje: "",
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formdata.nombre_interesado) {
      setError(true);
      setMessage("El nombre es requerido");
    } else if (!formdata.email_interesado) {
      setError(true);
      setMessage("El correo es requerido");
    } else if (!formdata.titulo_correo) {
      setError(true);
      setMessage("El tema es requerido");
    } else if (!formdata.mensaje) {
      setError(true);
      setMessage("El mensaje es requerido");
    } else {
      setError(false);
      emailjs
        .send(
          "service_nqupn5i",
          "template_promj7f",
          {
            titulo_correo: document.getElementById("InputSubject").value,
            nombre_interesado: document.getElementById("InputName").value,
            email_interesado: document.getElementById("InputEmail").value,
            mensaje: document.getElementById("InputMessage").value,
          },
          "user_8cLLppVZdxPvIcYZAXJUw"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      let formulario = document.getElementById("contact-form");
      formulario.style.display = "none";
      setMessage(
        "Su mensaje ha sido enviado, será contestado lo más pronto posible"
      );
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <Pagetitle title="Contáctame" />

        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>
                  ¿Necesitas un servicio, aplicativo o cotización de algun
                  trabajo en concreto?
                </h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p>
                  Si no deseas escribirme por un formulario, envíame un{" "}
                  <a href="mailto:updavo@heimdalec.com">email</a>. 👋
                </p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="col-md-8">
            <form
              id="contact-form"
              className="contact-form mt-6"
              onSubmit={submitHandler}
            >
              <div className="row">
                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="nombre_interesado"
                      id="InputName"
                      placeholder="Su nombre"
                      onChange={handleChange}
                      value={formdata.nombre_interesado}
                    />
                  </div>
                </div>

                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      name="email_interesado"
                      placeholder="Correo Electrónico"
                      onChange={handleChange}
                      value={formdata.email_interesado}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="InputSubject"
                      name="titulo_correo"
                      placeholder="Título de la consulta"
                      onChange={handleChange}
                      value={formdata.titulo_correo}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <textarea
                      name="mensaje"
                      id="InputMessage"
                      className="form-control"
                      rows="5"
                      placeholder="Mensaje"
                      onChange={handleChange}
                      value={formdata.mensaje}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                name="submit"
                id="submit"
                value="Submit"
                className="btn btn-default"
              >
                Enviar mensaje
              </button>
            </form>
            {handleAlerts()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
