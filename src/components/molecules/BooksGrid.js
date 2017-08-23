import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Book from './Book'

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

class BooksGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props

    return(
      <BooksGridWrap>
        {books.map((book, index) => (
          <Book book={book}></Book>
        ))}
      </BooksGridWrap>
    )
  }
}

export default BooksGrid
