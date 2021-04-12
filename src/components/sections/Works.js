import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Todos los trabajos",
  },
  {
    id: 2,
    text: "Creativos",
  },
  {
    id: 3,
    text: "Aplicaciónes Web",
  },
  {
    id: 4,
    text: "Apis",
  },
  {
    id: 5,
    text: "Diseños / Hackatones",
  },
];

const allData = [
  {
    id: 1,
    title: "Calendario para Profesores UEES",
    category: "Aplicaciónes Web",
    image: "images/works/01-01.jpg",
    popupLink: ["images/works/01-01.jpg"],
  },
  {
    id: 2,
    title: "Generador de Emails con diplomas UEES",
    category: "Aplicaciónes Web",
    image: "images/works/01-02.jpg",
    popupLink: ["images/works/01-02.jpg"],
  },
  {
    id: 3,
    title: "CRM y sus conexiones con IG/FB/LINKEDIN",
    category: "Apis",
    image: "images/works/01-03.jpg",
    popupLink: ["images/works/01-03.jpg"],
  },
  {
    id: 4,
    title: "Mesa de Ayuda UEES",
    category: "Aplicaciónes Web",
    image: "images/works/01-04.jpg",
    link: "https://www.uees.edu.ec/ayuda/ticket/",
  },
  {
    id: 5,
    title: "Api para el flujo de datos entre Redes sociales y CRM",
    category: "Apis",
    image: "images/works/01-05.jpg",
    popupLink: ["images/works/01-05.jpg"],
  },
  {
    id: 6,
    title: "ShopAR - Aplicación AR para probar ropa",
    category: "Creativos",
    image: "images/works/01-06.jpg",
    link: "https://github.com/UpDavo/ShopAR",
  },
  {
    id: 7,
    title: "Manejo de CRM y Automatizaciónes de Registro CREAR",
    category: "Apis",
    image: "images/works/01-07.jpg",
    popupLink: ["images/works/01-07.jpg"],
  },
  {
    id: 8,
    title: "Manejo de CRM y Automatizaciónes de Registro Ecomundo Vespertino",
    category: "Apis",
    image: "images/works/01-08.jpg",
    popupLink: ["images/works/01-08.jpg"],
  },
  {
    id: 9,
    title: "Manejo de CRM y Automatizaciónes de Registro Thomas More",
    category: "Apis",
    image: "images/works/01-09.jpg",
    popupLink: ["images/works/01-09.jpg"],
  },
  {
    id: 10,
    title: "Manejo de CRM y Automatizaciónes de Registro Ecomundo Matutino",
    category: "Apis",
    image: "images/works/01-10.jpg",
    popupLink: ["images/works/01-10.jpg"],
  },
  {
    id: 11,
    title:
      "Automatizaciónes para Múltiples Procesos de Marketing",
    category: "Apis",
    image: "images/works/01-11.jpg",
    popupLink: ["images/works/01-11.jpg"],
  },
  {
    id: 12,
    title: "Aplicación de Cotizaciónes para La Costa Samborondón",
    category: "Aplicaciónes Web",
    image: "images/works/01-12.jpg",
    popupLink: ["images/works/01-12.jpg"],
  },
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= dataVisibleCount));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Portafolio" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "No hay mas items"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Cargar Mas
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
