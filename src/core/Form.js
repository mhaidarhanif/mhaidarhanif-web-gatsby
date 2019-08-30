import React from 'react'
import styled from '@emotion/styled'

const StyledForm = styled.form``

const Form = props => {
  const handleSubmit = event => {
    event.preventDefault()
  }

  return <StyledForm onSubmit={handleSubmit}>{props.children}</StyledForm>
}

export default Form
