import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

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
  box-shadow: 0 0 0 5px ${rgba('salmon', .3)};
  height: 40px;
  position: absolute;
  right: 0;
  width: 40px;

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
