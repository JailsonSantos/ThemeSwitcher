import styled from "styled-components";

export const Container = styled.div`
    height: 10vh;
    background: ${props => props.theme.colors.primary};
    color: #fff;
    display: flex;
    padding: 0 30px;

    nav{
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      ul{
        list-style: none;
        display: flex;
      }

      li{
        margin-right: 15px;

        &:hover{
          cursor: pointer;
        }
      }
    }
`;

