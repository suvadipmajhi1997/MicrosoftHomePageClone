import React from 'react'
import {businessData} from '../data/business'


    const BusinessCard = () => {
      return (
        <div className='d-flex flex-column'>
            <h2 className='text-black mb-3'>For business</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4 mb-5 ps-1 pe-1">
          {businessData.map((data, id) => {
            return (
              <div
                key={id}
                className="d-flex flex-column justify-content-between border shadow business-card"
              >
                <div className='product-info'>
                  <img
                    src={data.image}
                    alt={data.name}
                    style={{
                      height: "160px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <div
                    className={`d-flex align-items-center justify-content-center ms-3 mt-3  ${
                      data.arrival && data.arrival.trim() !== ""
                        ? "bg-arrival"
                        : ""
                    }`}
                    style={{ minHeight: "30px" }} // or whatever height you need
                  >
                    {data.arrival && data.arrival.trim() !== "" && (
                      <p className="d-flex align-items-center justify-content-center mt-3 fw-bold text-black">
                        {data.arrival}
                      </p>
                    )}
                  </div>

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