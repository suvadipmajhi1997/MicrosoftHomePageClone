import React from 'react'
import {product} from '../data/Product'


const ProductCard = () => {
  return (
    <div className="container-fluid px-lg-5">
      <div className="row g-0 g-md-4">
      {product.map((card, id) => {
        return (
          <div
            key={id}
            className="col-12 col-md-6 col-lg-3"
            
          >
            <div>
              <picture>
                <source media="(max-width: 576px)" srcSet={card.image} />
                <img
                  src={card.image}
                  alt={card.title}
                  className="card-img-top img-fluid"
                  style={{
                    objectFit: "cover",
                    height: "auto",
                  }}
                />
              </picture>
              <h4 className="mt-2 ps-3 pb-3 pt-3 fs-3">{data.name}</h4>
              <p className="fs-6 ps-3 pb-3">{data.description}</p>
            </div>

            <div className="d-flex justify-content-start mt-auto ps-3 pb-4">
              <button className="btn btn-primary">{data.btnText}</button>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default ProductCard