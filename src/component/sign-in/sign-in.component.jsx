import React,{useState} from 'react';
import {connect} from 'react-redux';

import {Title,ButtonContainer, SignInContainer} from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {googleSignInStart,emailSignInStart} from '../../redux/user/user.action';

const SignIn = ({googleSignInStart,emailSignInStart})=>{
  const [userCredentials,setCredentials] = useState({email: '',password: ''})
  const {email,password} = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email,password);
  }

  const handleChange = (event) => {
    const {value,name} = event.target;
    setCredentials({...userCredentials,[name]: value})
  }

  return (
    <SignInContainer >
      <Title>I already have a account</Title>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit} >
        <FormInput 
          name='email'
          type='email' 
          value={email} 
          handleChange={handleChange}
          label='email'
          required 
        />
        <FormInput 
          name='password' 
          type='password'
          value={password}
          handleChange={handleChange} 
          label='password' 
          required 
        />
        <ButtonContainer>
          <CustomButton type='submit' >Sign In</CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
             Sign In With Google
          </CustomButton>
        </ButtonContainer>
      </form>
    </SignInContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);