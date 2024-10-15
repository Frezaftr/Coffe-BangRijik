import styled from 'styled-components'

export const ContainerPay = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};

  div:first-child{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    span{
      color: ${(props) => props.theme['purple']};
    }
    div{
      h4{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;

        color: ${(props) => props.theme['base-subtitle']};
      }
      p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;

        color: ${(props) => props.theme['base-text']};

        margin-top: 2px;
      }
    }
  }
`
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 2rem;
  button{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;

    background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    padding: 1rem;

    width:178.67px;
    span{
      display: flex;
      align-items: center;

      color: ${(props) => props.theme['purple']};
    }
    p{
      display: flex;
      justify-content: flex-start;
      align-items: center;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
    }
    &.active{
      background-color: ${(props) => props.theme['purple-light']};
      box-shadow: 0px 0px 3px ${(props) => props.theme['purple']};
    }
  }
`