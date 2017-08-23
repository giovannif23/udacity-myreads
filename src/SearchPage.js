import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import BooksGrid from './components/molecules/BooksGrid'
import Book from './components/molecules/Book'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
  state = {
    query: '',
    books: []
  }

  componentDidMount() {
    // TODO: see if this needs to be initialized
    // BooksAPI.getAll().then((books) => {
    //   this.setState({ books })
    // })
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })

    BooksAPI.search(query).then((books) => {
      this.setState({ books })
    })
  }

  clearQuery = () => {
    this.setState({ query: '' })
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
          <BooksGrid books={books}></BooksGrid>
        </div>
      </div>
    )
  }
}

export default SearchPage
