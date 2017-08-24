import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { rgba, darken } from 'polished'
import icon from '../../icons/add.svg'

const OpenSearchButton = styled.div`
  bottom: 25px;
  position: fixed;
  right: 25px;

  a {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: royalblue;
    background-image: url(${icon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 28px;
    box-shadow: 0 0 0 7px ${rgba('royalblue', 0)};
    font-size: 0;
    transition: background-color .2s, box-shadow .1s ease-in-out;

    &:hover {
      background-color: ${darken(.05, 'royalblue')};
      box-shadow: 0 0 0 10px ${rgba('royalblue', .2)};
    }
  }
`

function OpenSearch() {
  return(
    <OpenSearchButton>
      <Link to="/search">Add a book</Link>
    </OpenSearchButton>
  )
}

export default OpenSearch
