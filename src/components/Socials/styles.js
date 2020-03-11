import styled from "styled-components"

import colors from '../styles/variables/Colors'
import paddings from '../styles/variables/Paddings'
import sizes from '../styles/variables/Sizes'


export const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;

  p {
    text-transform: uppercase;
  }
`

export const Icons = styled.div`
  display:flex;
  flex-direction:row;
  margin-top: ${paddings.xl};
`

export const Single = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  padding: 0 ${paddings.rg};

  svg {
    margin-bottom: ${paddings.sm};
  }
`