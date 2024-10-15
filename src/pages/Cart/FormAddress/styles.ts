import styled from 'styled-components'
export const ContainerFormAdress = styled.div`
  padding: 2.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};

  div:first-child{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    span{
      color: ${(props) => props.theme['yellow-dark']};
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
export const ContainerInput = styled.form`
  div:first-child{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    div:nth-child(3){
      display: flex; 
      gap: 0.75rem;
    }
    div:nth-child(4){
      display: flex;
      gap: 0.75rem;
    }
  }
`


export const BaseInput = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  padding: 0.75rem;
  border: 0;
  border-radius: 0.25rem;

  &::placeholder {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
  }
`
export const Inputblock = styled(BaseInput)`
  width: 12.5rem;
`
export const InputLong = styled(BaseInput)`
  flex-grow: 1;
`
export const InputMedio = styled(BaseInput)`
  flex-grow:1;
`
export const InputSmall = styled(BaseInput)`
  width: 50px;
`