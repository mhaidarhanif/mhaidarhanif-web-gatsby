import React from 'react'

import icons from '../data/icons.json'

const SocialIcons = () => {
  return (
    <div>
      {icons.map((icon, index) => {
        return (
          <a key={index} href={icon.url}>
            <img src={`/icons/${icon.image}`} alt={icon.name} />
          </a>
        )
      })}
    </div>
  )
}

export default SocialIcons
