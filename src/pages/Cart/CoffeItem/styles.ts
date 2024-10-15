import styled from 'styled-components'

export const ContainerCoffe = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 2rem 0.25rem;
  border-bottom: 1px solid #E6E5E5;

  div:first-child{
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
    
  }
  img{
    width: 4rem;
    height: 4rem;
  }
  p:last-child{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    color:${(props) => props.theme['base-text']};
  }
`
export const ContainerCoffeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  p:first-child{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
  }

  div:nth-child(2){
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    height: 2rem;

    div:first-child{
      background-color: ${(props) => props.theme['base-button']};
      border-radius: 6px;

      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0 0.5rem;

      button{
        display: flex;
        align-items: center;

        border: 0;
        margin: 0;
        background-color: transparent;
        color: ${(props) => props.theme['purple']};
      }
      p{
        font-family: 'Roboto';
        font-style: normal;
        font-size: 1rem;
        font-weight: 400;
        color: ${(props) => props.theme['base-title']};
      }
    }
    button:nth-child(2){
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 0.25rem;
      padding: 0.5rem ;
      border-radius: 6px;
      border: 0;
      background-color: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['purple']};
      p{
        color: ${(props) => props.theme['base-text']};
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
      }
    }
  }
`
