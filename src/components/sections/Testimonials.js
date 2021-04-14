import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/people/profile-02.svg",
    userName: "Sully Hurtado",
    subtitle: "Salud S.A.",
    review:
      "Es muy responsable, siempre realiza las tareas en los tiempos propuestos y tiene una grán habilidad matemática.",
  },

  {
    id: 2,
    avatar: "images/people/profile-04.svg",
    userName: "Ana Luisa Velez",
    subtitle: "Jefa de Marketing UEES",
    review: `
      Me parece un gran profesional, sabe trabajar en equipo y es muy ordenado al momento de organizar tareas.
  `,
  },
  {
    id: 3,
    avatar: "images/people/profile-02.svg",
    userName: "Lorena Ocaña",
    subtitle: "Ex Gerente de Linde",
    review: `
     
    Es una persona con una grán capacidad para afrontar situaciones de la manera mas óptima posible con resultados positivos.
                
  `,
  },
  {
    id: 4,
    avatar: "images/people/profile-04.svg",
    userName: "Lohana Lema",
    subtitle: "Ciencias de la Computación UEES",
    review: `
      Es un estudiante muy aplicado, aparte de ser estudiante he tenido la oportunidad de trabajar con el y puedo decir que es un excelente profesional.
  `,
  },
  // {
  //   id: 3,
  //   avatar: "images/people/profile-03.svg",
  //   userName: "Andres del Pino",
  //   subtitle: "Webmaster Universidad Espíritu Santo",
  //   review: `

  // `,
  // },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Referencias" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
