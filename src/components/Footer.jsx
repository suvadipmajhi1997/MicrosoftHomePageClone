import React from 'react'
import { footerData } from '../data/footer'
import privacy from '../assets/0410-hd-privacy-choices-icon.png'
import globe from '../assets/globe.svg'
const Footer = () => { 
  return (
    <div id="footer" className='bgcolor d-flex flex-column ps-6 pe-6 py-0 pt-4 mt-7'>
    <div className='d-flex flex-column flex-lg-row justify-content-between gap-5 gap-lg-3 '>
      {
        footerData.map((data,idx)=>{
          return(
            <div key={idx}>
              <h1 className='fs-5 heading'>{data.heading}</h1>
              <div className="d-flex flex-column mt-2 gap-3">
                {
                  data.titles.map((ele,id)=>{
                    return(
                      <div key={id} className="fs-6 sub-tittle">
                        {ele.title}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
      
    </div>
    <div className="d-flex flex-column flex-lg-row justify-content-between mt-5">
        <div className="d-flex flex-column flex-lg-row gap-2 gap-lg-4 footer">
          <div className="d-flex">
          <img src={globe} alt="" style={{width:'40px', height:'20px' }} />
          <p>English(India)</p>
          </div>
          <div className="d-flex">
            <img src={privacy} alt="" style={{width:'40px', height:'20px', marginRight:'8px'}} />
          <p>Your Privacy Choice</p>
          </div>
          <p>Consumer Health Privacy</p>
        </div>
        <div className="d-flex flex-wrap flex-lg-row gap-2 gap-lg-4  footer">
          <p>Contact Microsoft</p>
          <p>Privacy</p>
          <p>Terms of use</p>
          <p>Trademarks</p>
          <p>About our ads</p>
          <p>© Microsoft 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Footer