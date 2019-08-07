import React from 'react'

import ElevatedChatButton from './components/ElevatedChatButton'
import HeaderHero from './components/HeaderHero'
import FooterGeneric from './components/FooterGeneric'
import SectionIntro from './components/SectionIntro'
import SectionQuoteHaidar from './components/SectionQuoteHaidar'
import SectionQuoteElon from './components/SectionQuoteElon'
import SectionSocial from './components/SectionSocial'
import SectionLearn from './components/SectionLearn'
import SectionTech from './components/SectionTech'
import SectionContact from './components/SectionContact'

function App() {
  return (
    <div>
      <ElevatedChatButton />

      <HeaderHero />

      <SectionIntro />
      <SectionQuoteHaidar />

      <SectionSocial />

      <SectionLearn />

      <SectionTech />

      <SectionQuoteElon />

      <SectionContact />

      <SectionSocial simple={true} />
      <FooterGeneric />
    </div>
  )
}

export default App
