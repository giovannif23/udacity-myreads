import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

import Header from './components/organisms/Header'
import BooksGrid from './components/molecules/BooksGrid'
import Bookshelf from './components/molecules/Bookshelf'
import OpenSearch from './components/atoms/OpenSearch'

class Home extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  refreshBooks = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        BooksAPI.getAll().then((books) => {
          this.setState((prevState, props) => {
            return { books }
          })
        })
      })
  }

  render() {
    const { books } = this.state

    return (
      <div className="list-books">
        <Header>
          <h1>MyReads</h1>
        </Header>
        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading">
              <BooksGrid showShelf={false} onSelect={this.refreshBooks} books={books} filter="currentlyReading"/>
            </Bookshelf>
            <Bookshelf title="Want to Read">
              <BooksGrid showShelf={false} onSelect={this.refreshBooks} books={books} filter="wantToRead"/>
            </Bookshelf>
            <Bookshelf title="Read">
              <BooksGrid showShelf={false} onSelect={this.refreshBooks} books={books} filter="read"/>
            </Bookshelf>
          </div>
        </div>
        <OpenSearch/>
      </div>
    )
  }
}

export default Home
