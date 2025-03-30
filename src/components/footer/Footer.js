import React from 'react'

import { ReactComponent as DiscordSVG } from '../../icons/Discord.svg'
import { ReactComponent as TwitterSVG } from '../../icons/Twitter.svg'
import { ReactComponent as InstagramVG } from '../../icons/Instagram.svg'

import { ReactComponent as OpenSeaSVG } from '../../icons/OpenSea.svg'

import './footer.css'
const Footer = () => {
  const handleDiscord = () => {
    window.open('')
  }

  const handleTwitter = () => {
    window.open('https://x.com/Roarerrudra', '_blank')
  }

  const handleInstagram = () => {
    window.open('https://www.instagram.com/xroarofficial', '_blank')
  }
  return (
    <div className='footerBC componentFirst'>
      <div className='footerMain componentSecond'>
        <div className='roadmap'>
          <div className='footerIcon'>
            <OpenSeaSVG />
          </div>
          <div className='footerIconText'>Open sea</div>
          <div className='footerName'><strong>Xroar</strong></div>
          <div className='footerName'>Let’s Connect.</div>

          <div className='footerJoin'><strong>Join us</strong></div>
          <div className='footerContainer'>
            <div className='footerLink' onClick={handleDiscord}>
              <DiscordSVG className='footerIcon' />
              <div className='footerLinkText'>Discord</div>
            </div>
            <div className='footerLink' onClick={handleTwitter}>
              <TwitterSVG className='footerIcon' />
              <div className='footerLinkText'>Twitter</div>
            </div>
            <div className='footerLink' onClick={handleInstagram}>
              <InstagramVG className='footerIcon' />
              <div className='footerLinkText'>Instagram</div>
            </div>
          </div>
          <div className='footerBox' />
        </div>
      </div>
    </div>
  )
}

export default Footer
