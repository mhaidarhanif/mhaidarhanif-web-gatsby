import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { breakpoints, variant } from "@xstyled/system"
import styled, { css } from "@xstyled/emotion"

import { contact } from "../data/form"

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
  span {
    font-size: 0.8em;
    color: red;
  }
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
  &:disabled {
    background: #555555;
  }
`

const LoadingMessage = styled.p``

const ContactForm = () => {
  const placeholders = contact.placeholders
  const [loading, setLoading] = useState({
    message: ``,
    isLoading: false,
    isSucess: false,
    isError: false,
  })
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async data => {
    setLoading({
      ...loading,
      isLoading: true,
      message: `Sending your message...`,
    })

    const body = {
      name: data.name || placeholders.name,
      email: data.email || placeholders.email,
      intention: data.intention || placeholders.intentions[0].text,
      title: data.title || placeholders.title,
      message: data.message || placeholders.message,
    }

    const response = await message.createGeneralMessage(body)

    if (response.isSuccess) {
      setLoading({
        ...loading,
        isLoading: false,
        isSuccess: true,
        message: response.message,
      })
    } else if (response.isError) {
      setLoading({
        ...loading,
        isLoading: false,
        isError: true,
        message: response.message,
      })
    } else {
      setLoading({
        ...loading,
        isLoading: false,
        isError: true,
        message: `Sorry, there is an unknown problem.`,
      })
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormFields>
        <FieldSet>
          <Label htmlFor="name">Your Full Name:</Label>
          <Input
            name="name"
            type="text"
            placeholder={placeholders.name}
            ref={register({ required: true, minLength: 1, maxLength: 100 })}
          />
          {errors.name && <span>Please tell your name</span>}
        </FieldSet>

        <FieldSet>
          <Label htmlFor="email">Your Email:</Label>
          <Input
            name="email"
            type="email"
            placeholder={placeholders.email}
            ref={register({ required: true })}
          />
          {errors.email && <span>Please tell your email</span>}
        </FieldSet>

        <FieldSet>
          <Label htmlFor="intention">Subject Intention:</Label>
          <Select name="intention" ref={register({ required: true })}>
            {placeholders.intentions.map((intention, index) => {
              return (
                <option key={index} value={intention.value}>
                  {intention.text}
                </option>
              )
            })}
          </Select>
          {errors.intention && <span>Please state a subject intention</span>}
        </FieldSet>

        <FieldSet>
          <Label htmlFor="title">Subject Title:</Label>
          <Input
            variant="full"
            name="title"
            type="text"
            placeholder={placeholders.title}
            ref={register({ required: true, minLength: 3, maxLength: 200 })}
          />
          {errors.title && <span>Please provide a title</span>}
        </FieldSet>

        <FieldSet>
          <Label htmlFor="message">Message:</Label>
          <TextArea
            variant="full"
            name="message"
            cols="30"
            rows="12"
            placeholder={placeholders.message}
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.message && <span>Please write a message</span>}
        </FieldSet>
      </FormFields>

      <SubmitButton
        variant="full"
        type="submit"
        value="Send Message"
        disabled={loading.isLoading}
      />

      <LoadingMessage>{loading.message}</LoadingMessage>
    </Form>
  )
}

export default ContactForm
