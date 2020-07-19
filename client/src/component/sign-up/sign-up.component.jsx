import React,{useState} from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signUpStart} from '../../redux/user/user.action';

import {SignUpContainer,Title} from './sign-up.styles';

const SignUp = ({signUpStart}) => {
	const [userCredentials,setCredentials]=useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	})
	const {displayName,email,password,confirmPassword} = userCredentials;
	
	const handleSubmit = async event => {
		event.preventDefault();
		if(password !== confirmPassword){
			alert("Password don't match!!!");
			return;
		}
		signUpStart({email,password,displayName})
	}

	const handleChange = event =>{
		const {name,value} = event.target;
		setCredentials({...userCredentials,[name]: value})
	}

	return (
		<SignUpContainer>
			<Title>I do not have a account</Title>
			<span>Sign Up  with yor email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					label='Display Name'
					required
				/>
				<FormInput
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					label='Email'
					required
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					label='Passwrod'
					required
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label='Confirm password'
					required
				/>
				<CustomButton type='submit'>SIGN UP</CustomButton>
			</form>
		</SignUpContainer>
	)
}

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})
export default connect(null,mapDispatchToProps)(SignUp);