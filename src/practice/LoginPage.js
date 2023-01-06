import React, { useState } from 'react'

function LoginPage() {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('Email:', Email);
        console.log('Password:', Password);
    
        let body = {
            email : Email,
            password : Password
        }
    }

    return (

        <div style={{
        
        }}>
            LoginPage
        </div>

    )
}

export default LoginPage;