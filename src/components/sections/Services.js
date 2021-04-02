import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "Diseño UI/UX",
    content:
      "Desarrollo de interfases que sean atractivas para los clientes y que a la vez mantengan la sencillez de una aplicación",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Desarrollo Web",
    content:
      "Desarrollo de todo tipo de aplicaciónes web que satisfagan las necesidades del cliente, rápido y eficiente",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/service-3.svg",
    title: "Apis de Redes sociales",
    content:
      "Desarrollo y control de campañas por redes sociales para el correcto manejo de clientes potenciales y automatización de emails",
    color: "#F97B8B",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Servicios" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Busca un desarrollo en específico?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click Aqui
            </Link>{" "}
            para contactarme! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
