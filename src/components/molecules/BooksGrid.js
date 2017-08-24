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
    books: PropTypes.array.isRequired,
    filter: PropTypes.string
  }

  componentWillReceiveProps(books) {
    console.log('nextProps', books);
  }

  render() {
    let { books, filter } = this.props

    console.log('books', books);

    if (filter) {
      books = books.filter((book) => book.shelf === filter)
    }

    return(
      <BooksGridWrap>
        {books.map((book, index) => (
          <Book key={index} book={book}></Book>
        ))}
      </BooksGridWrap>
    )
  }
}

export default BooksGrid
