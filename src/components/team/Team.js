import React from 'react'

import team1 from '../../image/team1.png'
import team2 from '../../image/team2.png'
import team3 from '../../image/team3.png'

import './team.css'

const Team = () => {
  return (
    <div className='componentFirst teamBackGround'>
      <div className='componentSecond'>
        <div className='roadmap'>
          <div className='roadmapTitle textHighlight'>OUR TEAM</div>
          <div className='roadmapSubTitle'>Mind Behind The Xroar Blockchain Platform</div>
          <div className='teamContainer'>
            <div className='teamItem'>
              <div className='teamItemImage'>
                <img src={team1} alt='' style={{ width: '100%' }} />
              </div>
              <div className='teamItemTitle'>Github: @roarerrudra</div>
              <div className='teamItemName'>Rudra Pratap Singh Rathore</div>
              <div className='teamItemPosition'>Team Leader</div>
            </div>
            <div className='teamItem'>
              <div className='teamItemImage'>
                <img src={team2} alt='' style={{ width: '100%' }} />
              </div>
              <div className='teamItemTitle'>Github: @KaushlendraSharma</div>
              <div className='teamItemName'>Kaushlendra Sharma</div>
              <div className='teamItemPosition'>Member</div>
            </div>
            <div className='teamItem'>
              <div className='teamItemImage'>
                <img src={team3} alt='' style={{ width: '100%' }} />
              </div>
              <div className='teamItemTitle'>Github: @jprajpurohit629</div>
              <div className='teamItemName'>Jitendra Singh Rajpurohit</div>
              <div className='teamItemPosition'>Member</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
