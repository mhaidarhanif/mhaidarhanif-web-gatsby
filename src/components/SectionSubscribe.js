import React from 'react'
import styled from '@emotion/styled'

import Section from '../core/Section'
import Heading from '../core/Heading'
import Form from '../core/Form'
import Input from '../core/Input'

import colors from '../styles/colors.json'

const SectionSubscribe = props => {
  const SubscribeContent = styled.div`
    background: linear-gradient(
      100deg,
      ${colors.black.c} 0%,
      ${colors.black.a} 100%
    );
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const SubscribeButton = styled.button`
    color: ${colors.green.a};
    background-color: ${colors.lime.c};
    border-radius: 5px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1.2px;
    padding: 11px 30px;
    text-transform: uppercase;
  `

  const SubscribeNote = styled.p`
    margin-top: 10px;
    color: ${colors.white.a};
  `

  return (
    <Section>
      <SubscribeContent>
        <Heading size={2} color="white">
          Get the updates by email
        </Heading>

        <Form>
          <Input type="text" name="missions" placeholder="Pick Your Mission" />
          <Input type="text" name="name" placeholder="Your Name" />
          <Input type="email" name="email" placeholder="yourname@mail.com" />
          <SubscribeButton type="submit" color="lime">
            Subscribe
          </SubscribeButton>
        </Form>

        <SubscribeNote>
          After this you will get updates and freebies from me. Don’t worry, I
          won’t share your data to anyone else. You can also unsubscribe
          anytime.
        </SubscribeNote>
      </SubscribeContent>
    </Section>
  )
}

export default SectionSubscribe
