import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  span{
    img{
      height: 90px;
    }
  }
  div{
    display: flex;
    gap: 12px;
    padding: 1px 0;
    span{
      display: flex;
      align-items: center;
      gap: 4px;

      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple']};

      border-radius: 0.375rem;
      padding: 0 0.5rem;
      p{
        
        font-family: 'Roboto';
        font-size: 0.875rem;
        font-weight: 400;

        margin-top: 1px;
        color: ${(props) => props.theme['purple-dark']};
      }
    }
    nav{
      display: flex;
      position: relative;
      a{
        background-color: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
        display: flex;
        align-items: center;
        justify-content: center;

        width: 38px;
        height: 38px;
        border-radius: 0.375rem;

        transition: background-color 0.2s;
        &:hover{
          background-color: ${(props) => props.theme['yellow-hover']};
        }
      }

    }
  }
  
`
export const NotificationBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background-color: ${(props) => props.theme['yellow-dark']};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 500;
  color: #fff; 

`