import styled from 'styled-components'
export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap:3.5rem;
  padding: 5.75rem 0;
  img{
    width: 476px;
    height: 360px;
  }
  @media(max-width:1800px){
    img{
      display: none;
    }
  }
`
export const IntroTitle = styled.span`
  display: flex ;
  gap: 1rem;
  flex-direction: column;
  margin-top: 2px;
  margin-bottom: 4.125rem; 
`
export const Title = styled.p`
  font-weight: 800;
  font-size: 3rem;
  color: ${(props) => props.theme['base-title']};
  line-height: 130%;
`
export const SubTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-style: normal;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 14.438rem 18.375rem; 
  gap: 1.25rem 2.5rem; 
  div{
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    p{
      font-family: "Roboto";
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
    }
    span{
      border-radius: 999px;
      height: 2rem;
      width: 2rem;
      color: ${(props) => props.theme['background']};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  div:nth-child(1){
    width: 14.438rem;
    span{
    background-color: ${(props) => props.theme['yellow-dark']};
  }
  }
  div:nth-child(3){
    width: 14.438rem;
    span{
      background-color: ${(props) => props.theme['yellow']};
    }
  }
  div:nth-child(2){
    width: 18.375rem;
    span{
      background-color: ${(props) => props.theme['base-text']};
    }
  }
  div:nth-child(4){
    width: 18.375rem;
    span{
      background-color: ${(props) => props.theme['purple']};
    }
  }
  
  
`