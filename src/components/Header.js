import { h } from 'preact'
import { Link } from 'preact-router/match'

const Header = () => (
  <header>
    <Link href='/'>
      <img src='/assets/mhaidarhanif-icon.svg' alt='Icon' />
    </Link>
    <h1>M Haidar Hanif</h1>
  </header>
)

export default Header
