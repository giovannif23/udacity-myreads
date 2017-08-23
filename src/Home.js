import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/organisms/Header'
import BooksGrid from './components/molecules/BooksGrid'
import Bookshelf from './components/molecules/Bookshelf'
import BookChanger from './components/atoms/BookChanger'
import Title from './components/atoms/Title'

class Home extends Component {
  render() {
    return (
      <div className="list-books">
        <Header>
          <h1>MyReads</h1>
        </Header>
        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading">
              <BooksGrid>

              </BooksGrid>
            </Bookshelf>
            <Bookshelf title="Want to Read">
              <BooksGrid>

              </BooksGrid>
            </Bookshelf>
            <Bookshelf title="Read">
              <BooksGrid>

              </BooksGrid>
            </Bookshelf>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Home
