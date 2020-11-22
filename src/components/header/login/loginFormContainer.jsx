import React from 'react'
import LoginReduxForm from './loginForm'

const LoginContainer = () => {
    const onSubmit = (e) => {
        console.log(e)
    }
        return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default LoginContainer;