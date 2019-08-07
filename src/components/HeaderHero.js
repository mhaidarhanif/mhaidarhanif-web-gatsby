import React from 'react'

import Header from '../core/Header'

const HeaderHero = () => {
  return (
    <Header>
      <nav>
        <h1>M Haidar Hanif</h1>
        <ul>
          <li>About</li>
          <li>Missions</li>
          <li>Learn</li>
          <li>Contact</li>
        </ul>
        <ul>
          <button>EN</button>
          <button>S</button>
          <button>D</button>
          <button>M</button>
        </ul>
      </nav>

      <h1>
        We live to improve the world, life, work, tech, and education altogether
      </h1>
      <button>LET'S GO BEYOND</button>

      <img src="/images/hero-home.jpg" alt="Hero" />
    </Header>
  )
}

export default HeaderHero
