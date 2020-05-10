import { h } from 'preact'
import styled from '@xstyled/emotion'

const FooterContainer = styled.footer`
  display: flex;
  padding: 30px;
  justify-content: center;
  color: #333333;
`

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <FooterContainer>
      <p>© {year} M Haidar Hanif</p>
    </FooterContainer>
  )
}

export default Footer
