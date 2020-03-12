import styled from "styled-components"

import colors from '../styles/variables/Colors'
import paddings from '../styles/variables/Paddings'
import sizes from '../styles/variables/Sizes'

export const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;

  @media ${sizes.mobileS} {
    padding-top: 30vh;
    padding-bottom: ${paddings.xxl};
  }
  
  @media ${sizes.tablet} {
    padding-top: 30vh;
    padding-bottom: 0;
  }

  @media ${sizes.laptop} {
    padding-top: 40vh;
    padding-bottom: 0;
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

  svg {
    opacity: 0;
    position: absolute;
    margin-top: ${paddings.xxl};
    left: 50%;
    transform: translateX(-50%);
  }
`