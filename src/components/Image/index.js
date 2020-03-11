import React from 'react'
import * as I from './style'

class Image extends React.Component {
  render() {
    return (
      <I.Wrapper>
        <img src={this.props.src} />
      </I.Wrapper>
    )
  }
}

export default Image