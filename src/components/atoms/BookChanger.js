import React from 'react'
import styled from 'styled-components'
import { rgba, darken } from 'polished'

import arrow from '../../icons/arrow-drop-down.svg'

const BookChangerWrap = styled.div`
  background: salmon;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  border-radius: 50%;
  box-sizing: border-box;
  bottom: -10px;
  box-shadow: 0 0 0 ${rgba('salmon', 0)};
  height: 40px;
  position: absolute;
  right: 0;
  transition: background-color .2s, box-shadow .1s ease-in-out;
  width: 40px;

  &:hover {
    background-color: ${darken(.05, 'salmon')};
    box-shadow: 0 0 0 5px ${rgba('salmon', .2)};
  }

  select {
    cursor: pointer;
    height: 100%;
    opacity: 0;
    width: 100%;
  }
`

function BookChanger() {
  return(
    <BookChangerWrap>
      <select>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </BookChangerWrap>
  )
}

export default BookChanger
