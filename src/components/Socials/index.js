import React from 'react'

// Components
import Icon from '../Icon'


// Styles
import * as So from './styles'
import * as S from '../styles/variables/Typography'

const Socials = () => {
  return(
    <So.Wrapper>
      <S.P>Find me on</S.P>
      <So.Icons>
        <So.Single><Icon type="github" /><S.A>Github</S.A></So.Single>
        <So.Single><Icon type="twitter" /><S.A>Twitter</S.A></So.Single>
        <So.Single><Icon type="email" /><S.A>Email</S.A></So.Single>
      </So.Icons>
    </So.Wrapper>
  )
}

export default Socials