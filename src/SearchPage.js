import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BooksGrid from './components/molecules/BooksGrid'
import * as BooksAPI from './BooksAPI'
import debounce from 'lodash/debounce'

class SearchPage extends Component {
  state = {
    query: '',
    books: []
  }

  componentWillMount() {
    this.updateQuery
  }

  debouncedQuery = debounce((query) => {
    if (query) {
      BooksAPI.search(query)
      .then((books) => {
        if (!books.items) {
          this.setState({ books })
        }
      })
    } else {
      this.setState({
        books: []
      })
    }
  }, 500)

  updateQuery = (query) => {
    this.setState({
      query
    })
    this.debouncedQuery(query)
  }

  refreshBookState = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        BooksAPI.get(book.id)
          .then((book) => {
            this.state.books.forEach((b, index) => {
              if (b.id === book.id ) {
                const books = this.state.books;
                books[index].shelf = shelf
                this.forceUpdate();
                //this.setState({ books[index].shelf = shelf })
              }
            })
          })
        })
  }

  render() {
    const { books, query } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid onSelect={this.refreshBookState} showShelf={true} books={books}></BooksGrid>
        </div>
      </div>
    )
  }
}

export default SearchPage
