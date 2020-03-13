import styled from "styled-components"

import colors from '../styles/variables/Colors'
import paddings from '../styles/variables/Paddings'
import sizes from '../styles/variables/Sizes'

export const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  padding-left: ${paddings.lg};
  padding-right: ${paddings.lg};
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;

  > div {
    max-width: calc(${paddings.xxl} * 6);
  }

  @media ${sizes.laptop} {
    padding-left: ${paddings.xxl};
    padding-right: ${paddings.xxl};
  }

  h1 {
    margin-bottom: ${paddings.lg};
    opacity: 0;

    i {
      color: ${colors.highlight};
    }
  }

  p {
    margin-top: ${paddings.rg};
    opacity: 0;
  }

  div.iconWrapper {
    opacity: 0;
    
    svg {
      position: absolute;
      margin-top: ${paddings.xxl};
      left: 50%;
      transform: translateX(-50%);
    }
  }
`