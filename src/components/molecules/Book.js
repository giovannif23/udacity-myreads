import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import BookChanger from '../atoms/BookChanger'
import * as BooksAPI from '../../BooksAPI'


const BookTop = styled.div`
  align-items: flex-end;
  display: flex;
  height: 20rem;
  position: relative;
`

const BookCover = styled.div`
  box-shadow: 0 0 1rem rgba(0, 0, 0, .2);
  background: aliceblue;
  border-radius: .3rem;
`

class Book extends Component {
  state = {
    thumbnail: '',
    book: {}
  }

  componentDidMount() {
    BooksAPI.get(this.props.book.id).then((book) => {
      this.setState({ book })
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ book: nextProps.book })
  }

  render() {
    const { onSelect, showShelf } = this.props
    const { book, shelf } = this.state

    return(
      <li>
        <div className="book">
          <BookTop>
            <BookCover style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}></BookCover>
            <BookChanger currentShelf={book.shelf} onSelect={onSelect} book={book} />
          </BookTop>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }

  static propTypes = {
    book: PropTypes.object.isRequired,
    onSelect: PropTypes.func,
    showShelf: PropTypes.bool
  }
}

export default Book
