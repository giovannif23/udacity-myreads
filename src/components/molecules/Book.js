import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookChanger from '../atoms/BookChanger'

class Book extends Component {
  state = {
    book: {
      shelf: ''
    }
  }

  static propTypes = {
    book: PropTypes.object.isRequired
  }

  render() {
    const { book } = this.props

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <BookChanger book={book} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
