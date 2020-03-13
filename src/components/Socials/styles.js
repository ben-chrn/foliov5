import styled from "styled-components"
import paddings from '../styles/variables/Paddings'


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

  svg {
    margin-bottom: ${paddings.rg};
  }
`

export const Single = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  padding: 0 ${paddings.rg};
`