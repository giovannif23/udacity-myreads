import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../atoms/Title'

const BookshelfWrap = styled.div`
  padding: 5rem;
`

const Books = styled.div`
  text-align: center;
`

function Bookshelf(props) {
  return (
    <BookshelfWrap>
      <Title>{props.title}</Title>
      <Books>{props.children}</Books>
    </BookshelfWrap>
  )
}

export default Bookshelf
