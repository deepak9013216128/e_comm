import styled from 'styled-components';

const SignInAndSignUpStyle = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    @media screen and (max-width: 800px){
        width: unset;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
export default SignInAndSignUpStyle;