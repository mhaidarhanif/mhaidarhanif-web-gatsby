import React from "react"
import { breakpoints, variant } from "@xstyled/system"
import styled, { css } from "@xstyled/emotion"

import message from "../utils/message"

const compactOrFull = {
  default: "compact",
  variants: {
    compact: css`
      width: 300px;
    `,
    full: css`
      width: 100%;
    `,
  },
}

const Form = styled.form`
  margin-top: 50px;
  ${breakpoints({
    xs: css``,
    md: css``,
  })}
`

const FormFields = styled.div`
  margin-bottom: 30px;
`

const FieldSet = styled.fieldset`
  padding: 0;
  border: 0;
  margin: 0;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-family: "Playfair Display", serif;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
`

const Input = styled.input`
  padding: 10px;
  margin: 0;
  font-size: 1em;
  line-height: 1.5em;
  border: 5px solid;
  border-color: tertiary;
  border-radius: 5px;
  ${variant(compactOrFull)}
`

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 10px;
  font-size: 1em;
  line-height: 1.5em;
  border: 5px solid;
  border-color: tertiary;
  border-radius: 5px;
  ${variant(compactOrFull)}
`

const TextArea = styled.textarea`
  resize: vertical;
  padding: 10px;
  font-size: 1em;
  line-height: 1.5em;
  border: 5px solid;
  border-color: tertiary;
  border-radius: 5px;
  ${variant(compactOrFull)}
`

const SubmitButton = styled.input`
  cursor: pointer;
  background-color: primary;
  color: black;
  font-size: 1em;
  padding: 10px 20px;
  transition: opacity 0.2s ease-in-out;
  border: 0;
  padding: 10px;
  font-size: 1em;
  line-height: 1.5em;
  border-radius: 5px;
  ${variant(compactOrFull)}
  &:hover {
    opacity: 0.8;
  }
`

const ContactForm = () => {
  const placeholders = {
    name: `Tim Berners-Lee`,
    title: `The Next Web`,
    email: `tim@www.org`,
    message: `Hello Haidar,
    
20 years ago, I invented the World Wide Web. For my next project, I'm building a web for open, linked data that could do for numbers what the Web did for words, pictures, video. So we can unlock our data and reframe the way we use it together.
    
Watch my video here: https://ted.com/talks/tim_berners_lee_the_next_web 

Let's collaborate!`,
  }

  const intentions = [
    { value: "random", text: "Random Message" },
    { value: "thanks", text: "Thank You Message" },
    { value: "collaboration", text: "Collaboration Offer" },
    { value: "project", text: "Project Offer" },
    { value: "job", text: "Job Offer" },
    { value: "help", text: "Asking for Help" },
    { value: "other", text: "Other" },
  ]

  const onSubmit = () => {
    const body = {
      name: placeholders.name,
      email: placeholders.email,
      intention: intentions[0].text,
      title: placeholders.title,
      message: placeholders.message,
    }
    message.createGeneralMessage("General", body)
  }

  return (
    <Form
      onSubmit={event => {
        event.preventDefault()
        onSubmit()
      }}
    >
      <FormFields>
        <FieldSet>
          <Label htmlFor="name">Your Full Name:</Label>
          <Input name="name" type="text" placeholder={placeholders.name} />
        </FieldSet>
        <FieldSet>
          <Label htmlFor="email">Your Email:</Label>
          <Input name="email" type="email" placeholder={placeholders.email} />
        </FieldSet>
        <FieldSet>
          <Label htmlFor="intention">Subject Intention:</Label>
          <Select name="intention">
            {intentions.map((intention, index) => {
              return (
                <option key={index} value={intention.value}>
                  {intention.text}
                </option>
              )
            })}
          </Select>
        </FieldSet>
        <FieldSet>
          <Label htmlFor="title">Subject Title:</Label>
          <Input
            variant="full"
            name="title"
            type="text"
            placeholder={placeholders.title}
          />
        </FieldSet>
        <FieldSet>
          <Label htmlFor="message">Message:</Label>
          <TextArea
            variant="full"
            name="message"
            cols="30"
            rows="12"
            placeholder={placeholders.message}
          />
        </FieldSet>
      </FormFields>
      <SubmitButton variant="full" type="submit" value="Send Message" />
    </Form>
  )
}

export default ContactForm
