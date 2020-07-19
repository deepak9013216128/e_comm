import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Title = styled.h2`
    margin: 10px 0;
`;
export const SignInContainer = styled.div`
    width: 420px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 800px){
        margin-bottom: 50px;
        width: 380px;
    }
    @media screen and (max-width: 400px){
        width: 295px;
    }
`;