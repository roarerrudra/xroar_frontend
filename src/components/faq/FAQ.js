import React, { useState } from 'react'

import { ReactComponent as PlusSVG } from '../../icons/Plus.svg'
import { ReactComponent as MinusSVG } from '../../icons/Minus.svg'

import './faq.css'

const FAQ = () => {
  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [four, setFour] = useState(false)
  return (
    <div className='componentFirst faqScroll'>
      <div className='componentSecond'>
        <div className='faq'>
          <div className='roadmapTitle textHighlight'>FAQ</div>
          <div className='roadmapSubTitle'> <strong>Growing Wealth Together: Your Success, Our Success!</strong></div>
          <div className='faqContainer'>
            <div className='faqItem' onClick={() => setOne(!one)}>
              <div className='faqItemLeft'>
                <div className='faqItemTitle'>How does Xroar help me improve my farming operations?</div>
              </div>
              <div className='faqItemRight'>{one ? <MinusSVG /> : <PlusSVG />}</div>
            </div>
            {one && (
              <div className='faqItemAnswer'>
                <div className='faqItemAnswerText'>
                Xroar provides real-time insights and automated drone services to enhance agricultural productivity.  <br />
                <br />

AI-powered drones monitor crop health, irrigation needs, and pest infestations.  <br />

Blockchain-based data storage ensures transparency and security of farm data.  <br />

NFT-based identity for farms allows secure access to agribusinesses and government schemes.  <br />

AgriToken payments enable direct transactions with buyers, eliminating middlemen.  <br />
<br />
 <strong>Benefit:</strong> Farmers get better yields, real-time insights, and fair market access.

                </div>
              </div>
            )}
            <div className='faqItem' onClick={() => setTwo(!two)}>
              <div className='faqItemLeft'>
                <div className='faqItemTitle'>How can I trust the farm data provided on Xroar?</div>
              </div>
              <div className='faqItemRight'>{two ? <MinusSVG /> : <PlusSVG />}</div>
            </div>
            {two && (
              <div className='faqItemAnswer'>
                <div className='faqItemAnswerText'>
                Xroar ensures data authenticity using blockchain and NFTs:  <br />

<strong>Immutable Blockchain Storage:</strong> Every data point is securely stored on the blockchain, making it tamper-proof.  <br />

<strong>NFT-Based Data Certificates:</strong> Each dataset (soil health, yield predictions, etc.) is assigned a unique NFT-backed certificate.  <br />

<strong>Smart Audits & Compliance:</strong> Automated blockchain audits verify data accuracy before transactions.  <br />

<strong>AI Verification:</strong> AI-powered analytics confirm data authenticity and detect anomalies.  <br />
<br />
 <strong>Benefit:</strong> Agribusinesses get verified, reliable farm data for decision-making and supply chain management.
                </div>
              </div>
            )}
            <div className='faqItem' onClick={() => setThree(!three)}>
              <div className='faqItemLeft'>
                <div className='faqItemTitle'>How does Xroar benefit my drone service business?</div>
              </div>
              <div className='faqItemRight'>{three ? <MinusSVG /> : <PlusSVG />}</div>
            </div>
            {three && (
              <div className='faqItemAnswer'>
                <div className='faqItemAnswerText'>
                Xroar provides a marketplace and automation tools to help drone operators maximize earnings:  <br />
                <br />
<strong>Automated Job Matching:</strong> Farmers request services, and drones are assigned based on location and expertise.  <br />

<strong>Instant Blockchain Payments:</strong> Get paid instantly via AgriToken without intermediaries.  <br />

<strong>Data Monetization:</strong> Drone-collected data (crop health, irrigation levels) can be sold as NFTs on the marketplace.  <br />

<strong>Regulatory Compliance:</strong> Xroar ensures all drone operations comply with government regulations via smart contracts.  <br />
<br />
 <strong>Benefit:</strong> Drone operators get higher income, automated job allocation, and compliance assurance.

                </div>
              </div>
            )}

            <div className='faqItem' onClick={() => setFour(!four)}>
              <div className='faqItemLeft'>
                <div className='faqItemTitle'>How can I trust the quality and authenticity of the crops sold as NFTs on Xroar?</div>
              </div>
              <div className='faqItemRight'>{four ? <MinusSVG /> : <PlusSVG />}</div>
            </div>
            {four && (
              <div className='faqItemAnswer'>
                <div className='faqItemAnswerText'>
                Xroar ensures that every crop NFT is verified, traceable, and secure using blockchain technology:  <br />
                <br />

<strong>NFT-Based Crop Certificates:</strong> Each batch of crops is assigned a unique NFT containing verified details like origin, quality, and farming practices.  <br />

<strong>Immutable Blockchain Records:</strong> The entire lifecycle of the crop—cultivation, pesticide use, irrigation, and harvesting—is recorded on the blockchain.  <br />

<strong>AI & IoT-Powered Quality Checks:</strong> Smart sensors analyze moisture content, nutrient levels, and other parameters before crops are tokenized.  <br />

<strong>Smart Contract-Enabled Transactions:</strong> Buyers can instantly verify all crop details and execute secure, automated payments via AgriToken.  <br />
<br />
<strong>Benefit:</strong> Buyers get guaranteed quality, traceable sourcing, and fraud-proof transactions when purchasing crops on Xroar.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
