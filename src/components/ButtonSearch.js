import React from 'react'
import styled from '@emotion/styled'

const StyledButtonSearch = styled.button`
  background: none;
  border: none;
  padding: 0;
`

const Icon = styled.img``

const ButtonSearch = ({ image, text }) => {
  return (
    <StyledButtonSearch>
      <Icon src="/icons/search.svg"></Icon>
    </StyledButtonSearch>
  )
}

export default ButtonSearch
