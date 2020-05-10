import { h } from 'preact'
import { breakpoints } from '@xstyled/system'
import styled, { css } from '@xstyled/emotion'

import Paragraph from './Paragraph'
import LinkButtons from './LinkButtons'
import LinkButton from './LinkButton'

const Container = styled.section`
  display: flex;
  margin: 100px auto;
  ${breakpoints({
    xs: css`
      flex-direction: column;
    `,
    md: css`
      flex-direction: row;
    `,
  })}
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${breakpoints({
    xs: css`
      margin-bottom: 60px;
    `,
    md: css`
      margin-bottom: 0;
    `,
  })}
`

const TitleSpecial = styled.h1`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  letter-spacing: 0.05em;
  margin: 0;
  margin-bottom: 15px;
  ${breakpoints({
    xs: css`
      font-size: 3em;
    `,
    md: css`
      font-size: 3.6em;
    `,
  })}
`

const Accent = styled.div`
  background-color: #f2c94c;
  height: 5px;
  width: 100px;
  border-radius: 10px;
`

const Texts = styled.div`
  padding-right: 30px;
`

const Photo = styled.img`
  border: 5px solid #222222;
  box-sizing: border-box;
  border-radius: 10px;

  ${breakpoints({
    xs: css`
      width: 100%;
    `,
    sm: css`
      width: 400px;
    `,
  })}
`

const SectionHero = () => (
  <Container>
    <Column>
      <TitleSpecial>
        <Accent></Accent>
        <span>Educator</span>
        <span>Engineer</span>
        <span>Explorer</span>
      </TitleSpecial>

      <Texts>
        <Paragraph>
          Haidar is a seasoned tech educator and engineer who mentor people in
          software engineering, web development, and industrial career. Beyond
          that, he’s exploring various experiments to solve world problems.
          Especially helping people’s career in the software industry. Normally
          he doesn’t talk in a 3rd person view.
        </Paragraph>

        <LinkButtons>
          <LinkButton href='/projects' variant='primary'>
            Check His Projects
          </LinkButton>
          <LinkButton href='/contact' variant='secondary'>
            Contact Haidar
          </LinkButton>
        </LinkButtons>
      </Texts>
    </Column>

    <Column>
      <Photo src='/assets/mhaidarhanif-photo.jpg' alt='Photo of Haidar' />
    </Column>
  </Container>
)

export default SectionHero
