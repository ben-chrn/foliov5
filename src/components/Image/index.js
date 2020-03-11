import React from 'react'
import * as I from './style'

const Image = (props) => {
  return (
    <I.Wrapper>
      <img src={props.src} />
    </I.Wrapper>
  )
}

export default Image