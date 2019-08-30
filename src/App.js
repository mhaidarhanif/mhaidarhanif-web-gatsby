import React from 'react'

import ElevatedChatButton from './components/ElevatedChatButton'
import SectionHeader from './components/SectionHeader'
import SectionFooter from './components/SectionFooter'
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

      <SectionHeader />

      <SectionIntro />
      <SectionQuoteHaidar />

      <SectionSocial />

      <SectionLearn />

      <SectionTech />

      <SectionQuoteElon />

      <SectionContact />

      <SectionSocial simple={true} />
      <SectionFooter />
    </div>
  )
}

export default App
