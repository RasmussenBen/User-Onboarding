import React, { useState, useEffect } from 'react';

export default function UserForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className = 'form container' onSubmit = {onSubmit}>
            <div className = 'form-group submit'>
                <h2>Add a User</h2>

                <button disabled = {disabled}>Submit</button>

                <div className = 'errors'>
                    <div>{errors.name</div>
                    <div>{errors.email</div>
                    <div>{errors.password</div>
                    // <div>{errors.termsOfService</div>
                </div>
            </div>
            
            <div className = 'form-group inputs'>
                
            </div>
        </form>
    )


}