import styled from "styled-components"

import colors from '../styles/variables/Colors'
import paddings from '../styles/variables/Paddings'
import sizes from '../styles/variables/Sizes'

export const Wrapper = styled.div`
  min-height: 80vh;
  display:flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: stretch;
  padding: ${paddings.xxl} ${paddings.lg};

  @media ${sizes.laptop} {
    padding: ${paddings.xxl} ${paddings.xxl};
    flex-direction: row;
  }
`

export const TextWrapper = styled.div`
  flex: 1;
  margin-top: ${paddings.xl};

  @media ${sizes.laptop} {
    margin-top: 0;
  }
`

export const PicWrapper = styled.div`
  flex: 1;
  width: 100%;

  @media ${sizes.laptop} {
    width: unset;
    padding-left: ${paddings.xxl};
  }

  img {
    width:100%;
    border-radius: 20px;
  }
`

export const Misc = styled.div`

  padding: ${paddings.rg} 0 ${paddings.md};

  mark {
    display: inline-block;

    &:nth-child(-n+2) {
      width: unset;
      position: relative;
      padding-right: ${paddings.rg};

      &:after {
        content:"";
        position: absolute;
        width: 4px;
        height: 4px;
        right: calc(${paddings.sm} - 2px);
        background: ${colors.content};
        border-radius: 50%;
        top: 50%;
        transform:translateY(-50%);
      }
    }

    width:100%;
    &:nth-last-child(2) {
      &:after {
        display:none;
      }
    }


    @media ${sizes.tablet} {
      width: unset;

      &:nth-last-child(2) {
        &:after {
          display:block;
        }
      }
    }
  }
`

export const Stack = styled.div`
  display:inline-block;
  background:${colors.black};
  border-radius:1000px;
  padding:12px ${paddings.md};
  margin-bottom:${paddings.xl};

  >svg {
    margin-top:1px;
    width: 32px;
    height: 32px;

    &:not(:first-child) {
      margin-left:${paddings.rg};
    }
  }
`

export const Link = styled.div`

  display:flex;
  flex-direction:row;
  align-items: center;
  margin-top: ${paddings.md};

  a {
    text-transform: uppercase;
    margin-right: ${paddings.sm};
  }
`