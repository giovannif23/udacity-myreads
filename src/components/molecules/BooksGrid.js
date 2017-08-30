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
  render() {
    let { books, filter, onSelect, showShelf } = this.props

    if (filter) {
      books = books.filter((book) => book.shelf === filter)
    }

    return(
      <BooksGridWrap>
        {books.map((book, index) => (
          <Book showShelf={showShelf} onSelect={onSelect} key={index} book={book}></Book>
        ))}
      </BooksGridWrap>
    )
  }

  static propTypes = {
    books: PropTypes.array,
    filter: PropTypes.string,
    onSelect: PropTypes.func,
    showShelf: PropTypes.bool
  }
}

export default BooksGrid
