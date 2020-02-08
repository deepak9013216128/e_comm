import React from 'react';

import SignInAndSignUpStyle from './sign-in-and-sign-up.styles';

import SignIn from '../../component/sign-in/sign-in.component';
import SignUp from '../../component/sign-up/sign-up.component';

const SignInAndSignUpPage = () =>(
    <SignInAndSignUpStyle >
        <SignIn />
        <SignUp />    
    </SignInAndSignUpStyle>
);

export default SignInAndSignUpPage;