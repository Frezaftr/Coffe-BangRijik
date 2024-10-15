import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  margin-top: 5rem;
`
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  h1{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;

    color: ${(props) => props.theme['yellow-dark']};
  }
  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ContainerOrder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6.375rem;
  img{
    width: 492px;
    height: 293px;
  }
`
export const BorderGradiente = styled.div`
  padding: 1px;
  border-radius: 6px 36px;
  background: linear-gradient(90deg, #8047F8 0%, #C47F17 100%);
`
export const ContainerOrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  padding: 2.5rem;

  width: 526px;

  
  border-radius: 6px 36px;
  background: ${(props) => props.theme['background']};

  
  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    span{
      font-weight: 700;
    }
  }
`
const BaseIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;
  width: 2rem;
  height: 2rem;
  color: white;
`

export const PinIcons = styled(BaseIcons)`
  background-color: ${(props) => props.theme['purple']};
`
export const TimerIcons = styled(BaseIcons)`
  background-color: ${(props) => props.theme['yellow']};
`
export const DollarIcons = styled(BaseIcons)`
  background-color: ${(props) => props.theme['yellow-dark']};
`

export const ContainerOrderInfoItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.875rem;
  align-items: center;
  height: 2.625rem ;
`