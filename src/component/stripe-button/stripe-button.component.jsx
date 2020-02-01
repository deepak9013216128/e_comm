import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_DmjsQvd5gqEWE106gstJltFq00qaKcEGxd';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'CRWN Colthing Ltd.'
            billingAddress
            shippingAddress
            image = 'http://sendeyo.com/up/d/f3eb2117da'
            description = {`Your total is $${price}`}
            amount = {stripePrice}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;
