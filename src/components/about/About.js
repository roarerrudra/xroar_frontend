import React from 'react'

import about1 from '../../image/about1.png'
import about2 from '../../image/about2.png'
import about3 from '../../image/about3.png'
import about4 from '../../image/about4.png'

import './about.css'

const About = () => {
  return (
    <div className='componentFirst aboutBC'>
      <div className='componentSecond'>
        <div className='about'>
          <div className='aboutLeft'>
            <div className='aboutBox'>
              <img src={about1} alt='' className='aboutBoxIMG' />
            </div>
          </div>
          <div className='aboutRight'>
            <div className='aboutRightTop'>
              <div className='aboutBox'>
                <img src={about2} alt='' className='aboutBoxIMG' />
              </div>
            </div>
            <div className='aboutRightBottom'>
              <div className='aboutRightBottomLeft'>
                <div className='aboutBox'>
                <img src={about3} alt='' className='aboutBoxIMG' />
                </div>
              </div>
              <div className='aboutRightBottomRight'>
                <div className='aboutBox aboutBoxLast'>
                  <img src={about4} alt='' className='aboutBoxIMG' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='aboutTextContainer'>
          <div className='aboutText'>
          <strong>We provide an end-to-end, tamper-proof supply chain solution that ensures authenticity, transparency, and automation, reducing operational costs and increasing trust.</strong>

          </div>
          <div className='aboutText'>
          <strong>Real-Time Visibility:</strong> Manufacturers, suppliers, and buyers can access live updates on component status, reducing delays and improving decision-making.

          </div>
          <div className='aboutText'>
          <strong>Tamper-Proof Tracking:</strong> Every transaction and movement is recorded on an immutable blockchain ledger, ensuring authenticity and eliminating data manipulation.
          </div>
          <div className='aboutText'>
          <strong>Eliminating Fraud & Counterfeiting:</strong> With a verifiable digital trail, businesses can ensure that parts are genuine and sourced ethically, reducing financial losses.

          </div>
          <div className='aboutText'>
          <strong>Seamless Data Sharing:</strong> A decentralized, secure database allows trusted stakeholders to access the same data, eliminating reliance on intermediaries.
          </div>
          <div className='aboutText'>
          <strong>Automated Compliance & Audits:</strong> Smart contracts enforce pre-set conditions, reducing manual inspections and ensuring regulatory compliance.

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
