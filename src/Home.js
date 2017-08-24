import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

import Header from './components/organisms/Header'
import BooksGrid from './components/molecules/BooksGrid'
import Bookshelf from './components/molecules/Bookshelf'
import BookChanger from './components/atoms/BookChanger'
import OpenSearch from './components/atoms/OpenSearch'
import Title from './components/atoms/Title'

class Home extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    // TODO: see if this needs to be initialized
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
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
              <BooksGrid books={books} filter="currentlyReading"/>
            </Bookshelf>
            <Bookshelf title="Want to Read">
              <BooksGrid books={books} filter="wantToRead"/>
            </Bookshelf>
            <Bookshelf title="Read">
              <BooksGrid books={books} filter="read"/>
            </Bookshelf>
          </div>
        </div>
        <OpenSearch/>
      </div>
    )
  }
}

export default Home
