import React from 'react'
import {product} from '../data/Product'


    const BusinessCard = () => {
      return (
        <div className='d-flex flex-column '>
        <div className="d-flex flex-wrap justify-content-center gap-4 mx-0 mb-lg-5 ps-1 pe-1">
          {product.map((data, id) => {
            return (
              <div
                key={id}
                className="d-flex flex-column justify-content-between border shadow product-card"
                
              >
                <div className='product-info'>
                  <img
                    src={data.image}
                    alt={data.name}
                      style={{
                      height: "180px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <h4 className=" ps-3 pt-3 pe-3 fs-3 text-black line-h">{data.name}</h4>
                  <p className="fs-5 ps-3 pb-3 text-black lh-160">{data.description}</p>
                </div>
                {/* Align button to start */}
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
  


export default BusinessCard