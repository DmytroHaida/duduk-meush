import React from 'react'
import { reduxForm } from 'redux-form';
import { FormField, Input } from '../../../common/formControls/FormsControls';
import googlePlus from '../../../assets/img/icons/googlePlus.png'
import { Link } from 'react-router-dom';
const LoginForm = (props) => {
    return (
        <div className="login-form-wrapper" style={{ display: props.loginPopUp ? 'block' : 'none' }} >
            <form className="login-form" onSubmit={props.handleSubmit}>
                <div>
                    Логін:
                        {FormField(Input, "text", "Login", "Login")}
                        Пароль:
                        {FormField(Input, "text", "Password", "Password")}
                    <div className="login-form-footer">
                        <button>Увійти</button>
                            Через:
                            <Link to="/">
                            <img src={googlePlus} width="20px" alt="" />
                        </Link>
                    </div>
                    <Link to="/" onClick={() => props.registrationPopupMode()} >зареєструватися</Link>
                    <div className="login-form-close" onClick={() => props.closePopUp(false)} ></div>
                </div>
            </form>
        </div>
    );
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
export default LoginReduxForm;