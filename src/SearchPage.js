import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BooksGrid from './components/molecules/BooksGrid'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim(),
      books: []
    })

    if (query) {
      BooksAPI.search(query)
      .then((books) => {
        if (!books.items) {
          this.setState({ books })
        }
      })
    }
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
