import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleNameError = () => {
        if (name == "") {
            setErrors(previous => ({ ...previous, name: "Name is required" }))
        }
    }


    function validateEmail(email) {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        return emailPattern.test(email);
        
        }

    const handleEmailError = () => {
        if (email == "") {
            setErrors(previous => ({ ...previous, email: "Email is required" }))
        } else if (!validateEmail(email)) {
            setErrors(previous => ({ ...previous, email: "Email is invalid" }))
        }
    }

    const handleMessageError = () => {
        if (message == "") {
            setErrors(previous => ({ ...previous, message: "Message is required" }))
        }
    }

    const removeErrors = () => {
        setErrors({
            name: "",
            email: "",
            message: ""
        })
    }

    return (
        <div>
            <h1>Contact</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name' onChange={(event) => setName(event.target.value)} onFocus={removeErrors} onBlur={handleNameError} />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' onChange={(event) => setEmail(event.target.value)} onFocus={removeErrors} onBlur={handleEmailError} />
                </div>
                <div className='form-group'>
                    <label htmlFor="Message">Message</label>
                    <textarea name="message" id="message" onChange={(event) => setMessage(event.target.value)} onFocus={removeErrors} onBlur={handleMessageError} ></textarea>
                </div>
                <div className='form-group'>
                    <button type="submit">Submit</button>
                </div>

                {errors && (
                    <div>
                        {errors.name}
                        {errors.email}
                        {errors.message}
                    </div>
                )}
            </form>
        </div>
    )
}

export default Contact