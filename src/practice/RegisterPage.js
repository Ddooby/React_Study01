import React, { useState } from 'react'

function RegisterPage() {
    const [Email, setEmail] = useState("");
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    return (
    <div>
        RegisterPage
        <form>
            <label>Email </label>
            <input type="email" value={Email} onChange={onEmailHandler} />
        </form>
    </div>
    )
}

export default RegisterPage