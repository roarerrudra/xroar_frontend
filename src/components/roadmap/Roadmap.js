import React from 'react'

import { ReactComponent as Roadmap1SVG } from '../../icons/Roadmap1.svg'
import { ReactComponent as Roadmap2SVG } from '../../icons/Roadmap2.svg'
import { ReactComponent as Roadmap3SVG } from '../../icons/Roadmap3.svg'
import { ReactComponent as Roadmap4SVG } from '../../icons/Roadmap4.svg'

import './roadmap.css'

const Roadmap = () => {
  return (
    <div className='componentFirst roadmapBC'>
      <div className='componentSecond'>
        <div className='roadmap'>
          <div className='roadmapTitle textHighlight'>Key Features</div>
          <div className='roadmapSubTitle'>The Xroar Blockchain Platform ensures transparency, security, and efficiency in the agricultural supply chain.</div>

          <div className='roadmapList'>
            <div className='roadmapItemLeft'>
              <div className='roadmapIcon'>
                <Roadmap1SVG />
              </div>
              <div className='roadmapText'>Component Authentication & Registration</div>
            </div>

            <div className='roadmapItemRight'>
              <div className='roadmapText'>Smart Supply Chain & Logistics</div>
              <div className='roadmapIcon'>
                <Roadmap2SVG />
              </div>
            </div>

            <div className='roadmapItemLeft'>
              <div className='roadmapIcon'>
                <Roadmap3SVG />
              </div>
              <div className='roadmapText'>Drone Deployment & Agricultural Data Collection</div>
            </div>

            <div className='roadmapItemRight'>
              <div className='roadmapText'>Crop Data Marketplace (NFT-Based)</div>
              <div className='roadmapIcon'>
                <Roadmap4SVG />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
