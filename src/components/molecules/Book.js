import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookChanger from '../atoms/BookChanger'

class Book extends Component {
  state = {
    book: {
      shelf: '',
      thumbnail: '',
    }
  }

  static propTypes = {
    book: PropTypes.object.isRequired
  }

  componentDidMount() {
    if (this.props.book) {
      this.setState({ shelf: this.props.book.shelf })

      if (this.props.book.imageLinks && this.props.book.imageLinks.thumbnail) {
        this.setState({ thumbnail: this.props.book.imageLinks.thumbnail })
      }
    }
  }

  render() {
    const { book } = this.props
    const { thumbnail } = this.state

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail ? thumbnail : ''})` }}></div>
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
