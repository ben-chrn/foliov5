import styled from "styled-components"

import colors from '../styles/variables/Colors'
import paddings from '../styles/variables/Paddings'

export const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 233px;
  position: relative;

  h1 {
    margin-bottom: ${paddings.lg};

    i {
      color: ${colors.highlight};
    }
  }

  p {
    margin-top: ${paddings.rg};

    a {
      position: relative;
      display: inline-block;

      &:after {
        content: "";
        position:absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 1px;
        background: ${colors.highlight};
      }
    }
  }

  svg {
    position: absolute;
    margin-top: ${paddings.xxl};
    left: 50%;
    transform: translateX(-50%);
  }
`