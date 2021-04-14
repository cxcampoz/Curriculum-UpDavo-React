import React from "react";

const brandlogoData = [
  {
    id: 1,
    image: "icons/dassadasddas-01.svg",
  },
  {
    id: 2,
    image: "icons/dassadasddas-02.svg",
  },
  {
    id: 3,
    image: "icons/dassadasddas-03.svg",
  },

  {
    id: 4,
    image: "icons/dassadasddas-08.svg",
  },
  {
    id: 5,
    image: "icons/dassadasddas-04.svg",
  },
  {
    id: 6,
    image: "icons/dassadasddas-05.svg",
  },
  {
    id: 7,
    image: "icons/dassadasddas-06.svg",
  },
  {
    id: 8,
    image: "icons/dassadasddas-07.svg",
  },
];

function Brandlogos() {
  return (
    <div id="branglogos">
      <div className="container">
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-3 col-6" key={brandlogo.id}>
              <div className="client-item">
                <div className="inner">
                  <img src={brandlogo.image} alt="client-name" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brandlogos;
