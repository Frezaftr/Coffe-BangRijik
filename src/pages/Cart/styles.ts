import styled from 'styled-components'

export const ContainerMain = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const ContainerData = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 640px;
  flex-grow: 1;
  h3{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
  }
`




export const ContainerPedido = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 448px;
  gap:0.75rem;
  h3{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
  }
`

export const ContainerResume = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 8px 2.5rem 2.5rem;
  border-radius: 6px 44px;
`

export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  margin-top: 25.5px;
  div{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`

export const TextSmall = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 0.875rem;
`
export const TextBig = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 1.125rem;
`
export const TextMedium = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1rem;
`

export const CheckButton = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;

  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem;
  border-radius: 6px;
  
  background-color: ${(props) => props.theme['yellow']};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  color: ${(props) => props.theme['white']};
  &:hover{
    background-color: ${(props) => props.theme['yellow-dark']};
  }
  

`