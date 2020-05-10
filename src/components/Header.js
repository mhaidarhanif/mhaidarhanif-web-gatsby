import { h } from 'preact'
import { Link } from 'preact-router/match'
import { breakpoints } from '@xstyled/system'
import styled, { css } from '@xstyled/emotion'

const Containers = styled.nav`
  display: block;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 100;
  padding: 0;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(200%) blur(5px);
`

const Column = styled.div`
  display: flex;
  align-items: center;
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`

const LogoIcon = styled.img`
  height: 30px;
`

const LogoText = styled.span`
  color: primary;
  font-size: 1.2em;
  font-weight: 900;
  letter-spacing: 0.1em;
  padding-left: 10px;
`

const NavigationLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  text-transform: uppercase;
  margin: 0;
  li {
    margin: 0 10px;
    a {
      color: white;
    }
  }
  ${breakpoints({
    xs: css`
      justify-content: space-between;
      display: none;
    `,
    md: css`
      display: flex;
    `,
  })}
`

const MenuIcon = styled.img`
  height: 10px;
  padding: 0 10px;
`

const Header = () => (
  <Containers>
    <Row>
      <Column>
        <LogoLink href='/'>
          <LogoIcon src='/assets/mhaidarhanif-icon.svg' alt='Logo Icon' />
          <LogoText href='/'>M Haidar Hanif</LogoText>
        </LogoLink>
      </Column>
      <Column>
        <NavigationLinks>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
        </NavigationLinks>

        <Link href='/'>
          <MenuIcon src='/assets/menu-icon.svg' alt='Menu Icon' />
        </Link>
      </Column>
    </Row>
  </Containers>
)

export default Header
