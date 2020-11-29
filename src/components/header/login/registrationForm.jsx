import React from 'react'
import { reduxForm } from 'redux-form';
import { FormField, Input } from '../../../common/formControls/FormsControls';

const RegistrationForm = (props) => {
    
    return (
        <div className="login-form-wrapper" style={{display: props.registrationPopUp ? 'block' : 'none'}}  >
            <form className="login-form" onSubmit={props.handleSubmit}>
                <div>
                    Імя:
                    {FormField(Input, "text", "Імя", "name")}
                    Емейл:
                    {FormField(Input, "text", "Емейл", "emeil")}
                    Пароль
                    {FormField(Input, "password", "Пароль", "password")}
                    <div className="login-form-footer">
                        <button>Зареєструватись</button>
                    </div>
                </div>
            </form>
            <div className="login-form-close" onClick={() => props.registrationPopupClose(false)} ></div>
        </div>
    );
}

const RegistrationReduxForm = reduxForm({ form: 'registration' })(RegistrationForm)

export default RegistrationReduxForm;
