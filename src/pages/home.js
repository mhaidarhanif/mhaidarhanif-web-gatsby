import { h } from 'preact'

import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import SectionIntro from '../components/SectionIntro'
import SectionSocial from '../components/SectionSocial'

const Home = () => (
  <Layout>
    <SectionHero></SectionHero>
    <SectionIntro></SectionIntro>
    <SectionSocial></SectionSocial>
  </Layout>
)

export default Home
