import React from 'react';

import {Title,ButtonContainer, SignInContainer} from './sign-in.styles';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {auth,SignInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})

        }catch(error){
            console.log(error);
        }
    }

    handleChange = (event) => {
        const {value,name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return (
            <SignInContainer >
                <Title>I already have a account</Title>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        name='email'
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange} 
                        label='password' 
                        required 
                    />
                    <ButtonContainer>
                        <CustomButton type='submit' >Sign In</CustomButton>
                        <CustomButton type='submit' onClick={SignInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </ButtonContainer>
                    </form>
            </SignInContainer>
        )
    }
}

export default SignIn;