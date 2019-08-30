import React from 'react'
import styled from '@emotion/styled'

import Section from '../core/Section'
import Input from '../core/Input'
import TextArea from '../core/TextArea'
import Button from '../core/Button'

import ContentHeading from '../components/ContentHeading'

import colors from '../styles/colors.json'

const SectionContact = props => {
  const ContactContent = styled.div`
    background: ${colors.white.c};
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const Small = styled.small`
    color: ${colors.white.a};
    margin-bottom: 1px;
  `

  const Form = styled.form`
    display: flex;
    min-width: 960px;
  `

  const FormDivider = styled.div`
    width: ${props => props.size + '%'};
    display: flex;
    flex-direction: column;
  `

  const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  `

  const Label = styled.label`
    font-size: 1.4em;
    margin: 10px 0;
  `

  const Required = styled.span`
    color: ${colors.red.b};
  `

  return (
    <Section>
      <ContactContent>
        <ContentHeading
          title="The Contact"
          subtitle="If you need specific help and consultation, message me below"
        />
        <Small>yes me, not Elon :)</Small>
        <Form>
          <FormDivider size={30}>
            <FormGroup>
              <Label htmlFor="purpose">
                Purpose<Required>*</Required>
              </Label>
              <Input
                type="text"
                name="purpose"
                placeholder="Pick Your Purpose"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">
                Name<Required>*</Required>
              </Label>
              <Input type="text" name="name" placeholder="Your Name" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">
                Email<Required>*</Required>
              </Label>
              <Input
                type="email"
                name="email"
                placeholder="yourname@mail.com"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">Phone</Label>
              <Input type="phone" name="phone" placeholder="+1 1234 5678" />
            </FormGroup>
          </FormDivider>

          <FormDivider size={70}>
            <FormGroup>
              <Label htmlFor="message">
                Message<Required>*</Required>
              </Label>
              <TextArea
                name="message"
                cols={30}
                rows={10}
                height={265}
                placeholder="Enter your clear and meaningful message or request here according to the purpose. Thank you."
              ></TextArea>
            </FormGroup>
            <Small>
              Inputs marked <Required>*</Required> are required
            </Small>
            <Button type="submit" color="lime">
              Send Message
            </Button>
          </FormDivider>
        </Form>
      </ContactContent>
    </Section>
  )
}

export default SectionContact
