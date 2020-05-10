import { h } from 'preact'
import { Link } from 'preact-router/match'
import styled from '@xstyled/emotion'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderLinkContainer = styled.div`
  padding: 1rem;
`

const LogoIcon = styled.img``

const LogoText = styled.h1`
  color: #f2c94c;
  letter-spacing: 0.1em;
  font-family: 'Playfair Display SC', serif;
`

const MenuIcon = styled.img`
  padding-right: 15px;
`

const Header = () => (
  <HeaderContainer>
    <HeaderLinkContainer>
      <Link href='/'>
        <LogoIcon src='/assets/mhaidarhanif-icon.svg' alt='Haidar Icon' />
      </Link>
    </HeaderLinkContainer>

    <Link href='/'>
      <LogoText>M Haidar Hanif</LogoText>
    </Link>

    <HeaderLinkContainer>
      <Link href='/'>
        <MenuIcon src='/assets/menu-icon.svg' alt='Menu Icon' />
      </Link>
    </HeaderLinkContainer>
  </HeaderContainer>
)

export default Header
