import styled from "styled-components"

import colors from '../styles/variables/Colors'
import paddings from '../styles/variables/Paddings'

export const Wrapper = styled.div`
  box-sizing:border-box;
  padding: 24px;
  background: ${colors.black};
  border-radius: 20px;

  img {
    max-width:100%;
    border-radius: 20px;
  }
`