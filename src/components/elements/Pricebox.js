import React from "react";
import { Link } from "react-scroll";

function Pricebox({ priceboxItem }) {
  const { icon, title, content, price, badge, best } = priceboxItem;
  return (
    <div
      className={
        best
          ? "price-item bg-white rounded shadow-dark text-center best"
          : "price-item bg-white rounded shadow-dark text-center"
      }
    >
      {badge && <span className="badge">{badge}</span>}
      <img src={icon} alt="Regular" />
      <h2 className="plan">{title}</h2>
      {content.map((singleContent) => (
        <p key={singleContent.id}>{singleContent.text}</p>
      ))}
      <h3 className="price">
        <em>$</em>
        {price}
        {price == "Cotizar" ? <span></span> : <span>App</span>}
      </h3>
      <Link
        className="btn btn-default"
        to="section-contact"
        spy={true}
        smooth={true}
        duration={500}
      >
        Conocer mas
      </Link>
    </div>
  );
}

export default Pricebox;
