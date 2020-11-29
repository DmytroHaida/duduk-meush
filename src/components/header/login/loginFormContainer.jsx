import React from 'react'
import { connect } from 'react-redux'
import LoginReduxForm from './loginForm'
import { loginPopupMode, registrationPopupMode, registrationPopupClose } from '../../../redux/reducer/login-reducer'
import RegistrationReduxForm from './registrationForm'

const LoginContainer = (props) => {
    const onSubmit = (e) => {
        console.log(e)
    }
    const closePopUp = (e) => {
        props.loginPopupMode(e)
    }
    const registrationPopupMode = () => {
        props.loginPopupMode(false)
        props.registrationPopupMode(true)

    }
    const registrationPopupClose = (e) => {
        props.registrationPopupClose(e)
    }
    return (
        <div>
            <LoginReduxForm
                closePopUp={closePopUp}
                onSubmit={onSubmit}
                loginPopUp={props.loginPopUp}
                registrationPopupMode={registrationPopupMode}
            />
            <RegistrationReduxForm
                registrationPopUp={props.registrationPopUp}
                registrationPopupClose={registrationPopupClose}
            />
        </div>
    )
}
const mapStateToProps = (state) => ({
    loginPopUp: state.login.loginPopUp,
    registrationPopUp: state.login.registrationPopUp
})
export default connect(mapStateToProps, { loginPopupMode, registrationPopupMode, registrationPopupClose })(LoginContainer);