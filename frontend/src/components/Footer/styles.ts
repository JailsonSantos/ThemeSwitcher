import styled from "styled-components";

export const Container = styled.div`
    height: 10vh;
    background: ${props => props.theme.colors.primary};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
`;