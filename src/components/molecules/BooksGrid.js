import React from 'react'
import styled from 'styled-components'
import BookChanger from '../atoms/BookChanger'

const BooksGridWrap = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    padding: 1rem 1.5rem;
    text-align: left;
  }
`

function BooksGrid(props) {
  return(
    <BooksGridWrap>
      {props.children}
    </BooksGridWrap>
  )
}

export default BooksGrid
