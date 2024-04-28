import React, {useState} from 'react';
import {CardElement, PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {FormContainer, PaymentButton, PaymentFormContainer} from "./payment-form.styles";
import {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {useSelector} from "react-redux";
import {selectCartTotal} from "../../store/cart/cart.selector";
import {selectCurrentUser} from "../../store/user/user.selector";

const PaymentFormComponent = () => {
    const stripe = useStripe()
    const elements = useElements();
    const amountToPay = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [paymentIsProcessing, setPaymentIsProcessing] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setPaymentIsProcessing(true);
        const response = await fetch(
            "/.netlify/functions/create-payment-intent",
            {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({amount: amountToPay * 100})
            }).then(res => res.json());

        console.log(response);

        const {
           paymentIntent: {client_secret}
        } = response;


        // const client_secret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment({
            client_secret,
            confirmParams: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                },
            }
        })

        // console.log(paymentResult);

        setPaymentIsProcessing(false);

        if (!paymentResult) {
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert("Payment successful");
            }
        }
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <CardElement/>
                {/*<PaymentElement/>*/}
                <PaymentButton type={BUTTON_TYPE_CLASSES.inverted} isLoading={true}>
                    Pay Now!
                </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    );
};

export default PaymentFormComponent;