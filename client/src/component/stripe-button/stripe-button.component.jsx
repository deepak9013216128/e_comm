import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_DmjsQvd5gqEWE106gstJltFq00qaKcEGxd';

    const onToken = token =>{
        axios({
            url: '/payment',
            method: 'post',
            data: {
              amount: priceForStripe,
              token: token
            }
          })
        .then(response => {
            alert('succesful payment');
        })
        .catch(error => {
            console.log('Payment Error: ', error);
            alert(
            'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
        });
    }

    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'CRWN Colthing Ltd.'
            billingAddress
            shippingAddress
            image = 'http://sendeyo.com/up/d/f3eb2117da'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;
