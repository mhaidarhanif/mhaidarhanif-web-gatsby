import React from 'react'

import ElevatedChatButton from './components/ElevatedChatButton'
import SectionHeader from './components/SectionHeader'
import SectionFooter from './components/SectionFooter'
import SectionIntro from './components/SectionIntro'
import SectionSubscribe from './components/SectionSubscribe'
import SectionQuoteElon from './components/SectionQuoteElon'
import SectionSocial from './components/SectionSocial'
import SectionPost from './components/SectionPost'
import SectionTech from './components/SectionTech'
import SectionContact from './components/SectionContact'

const App = () => {
  return (
    <div>
      <ElevatedChatButton />

      <SectionHeader />

      <SectionIntro />

      <SectionSubscribe />

      <SectionSocial />

      <SectionPost />

      <SectionTech />

      <SectionQuoteElon />

      <SectionContact />

      <SectionFooter />
    </div>
  )
}

export default App
