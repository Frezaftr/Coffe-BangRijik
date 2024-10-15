import styled from 'styled-components'


export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
export const Title = styled.h1`
  color: ${(props) => props.theme['base-title']};
`
export const ListCoffe = styled.div`
  display: flex;
  gap: 2rem;
  margin-top:3.375rem;
  flex-wrap: wrap;
  @media (min-width: 1476px){
    width: 1156px;
  }
  @media (min-width: 1180px)and (max-width: 1476px){
    width: 859px;
  }
  @media (min-width: 882px) and (max-width: 1180px){
    width: 562px;
  }
  

`
