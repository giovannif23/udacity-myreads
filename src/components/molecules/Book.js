import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookChanger from '../atoms/BookChanger'
import * as BooksAPI from '../../BooksAPI'

class Book extends Component {
  state = {
    shelf: '',
    thumbnail: ''
  }

  static propTypes = {
    book: PropTypes.object.isRequired,
    onSelect: PropTypes.func,
    showShelf: PropTypes.bool
  }

  componentDidMount() {
    if (this.props.showShelf) {
      BooksAPI.get(this.props.book.id).then((book) => {
        this.setState({ shelf: book.shelf })
      })
    }
  }

  render() {
    const { book, onSelect, showShelf } = this.props
    const { shelf } = this.state

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}></div>
            <BookChanger currentShelf={shelf} onSelect={onSelect} book={book} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
