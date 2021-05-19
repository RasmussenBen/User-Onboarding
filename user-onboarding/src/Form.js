import React from 'react';

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
                <h4>User Info</h4>
                <label>Name
                    <input
                        value = {values.name}
                        onChange = {onChange}
                        name = 'name'
                        type = 'text'
                    />
                </label>
                <label>Name
                    <input
                        value = {values.email}
                        onChange = {onChange}
                        name = 'name'
                        type = 'text'
                    />
                </label>
                <label>Name
                    <input
                        value = {values.password}
                        onChange = {onChange}
                        name = 'name'
                        type = 'text'
                    />
                </label>
                <label>Terms of Service
                    <input
                        value = {values.termsOfService}
                        onChange = {onChange}
                        name = 'terms of service'
                        type = 'checkbox'
                    />
                </label>
            </div>
        </form>
    )
}