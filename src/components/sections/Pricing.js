import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Pricebox from "../elements/Pricebox";

const priceboxData = [
  {
    id: 1,
    title: "Basico",
    icon: "images/price-1.svg",
    content: [
      {
        id: 0,
        text:
          "Opción simple pero eficiente que garantiza el exito de sus negocios (Páginas web Simples)",
      },
      {
        id: 2,
        text: "Soporte vía Email/Videollamada",
      },
    ],
    price: 399,
    best: false,
    badge: false,
  },
  {
    id: 2,
    title: "Premium",
    icon: "images/price-2.svg",
    content: [
      {
        id: 1,
        text:
          "Producto con gran cantidad de soporte que incluye integraciones de aplicaciones y más funciones (Aplicaciónes Web)",
      },
      {
        id: 2,
        text: "Soporte de Lunes a Viernes",
      },
    ],
    price: "500/899",
    best: true,
    badge: "Recomendado",
  },
  {
    id: 3,
    title: "Preferencial",
    icon: "images/price-3.svg",
    content: [
      {
        id: 1,
        text:
          "Una sabia opción para grandes empresas y particulares que necesiten aplicaciónes complejas",
      },
      { id: 2, text: "Soporte las 24/7" },
    ],
    price: "Cotizar",
    best: false,
    badge: false,
  },
];

function Pricing() {
  return (
    <section id="prices">
      <div className="container">
        <Pagetitle title="Planes y Precios" />
        <div className="row align-items-center">
          {priceboxData.map((pricebox) => (
            <div key={pricebox.id} className="col-md-4">
              <Pricebox priceboxItem={pricebox} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
