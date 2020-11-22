import React from 'react'
import { FormField, Input, TextArea } from '../../common/formControls/FormsControls';
import { reduxForm } from 'redux-form';

export const Feedback = (props) => {
    return (
        <div className='feedback-wrapper'>
            <form onSubmit={props.handleSubmit}>
                < div>
                    <h2>Зворотний зв’язок</h2>
                    <div>
                        <span>Ваше iм’я:</span>
                        {FormField(Input, null, null, 'Name')}
                    </div>
                    <div>
                        <span>Ваш E-Mail:</span>
                        <span className="impotant">*</span>
                        {FormField(Input, null, null, 'EMail')}
                    </div>
                    <div>
                        <span>Тема:</span>
                        <span className="impotant">*</span>
                        {FormField(Input, null, null, 'Theme')}
                    </div>
                    <div>
                        <span>Повідомлення:</span>
                        <span className="impotant">*</span>
                        {FormField(TextArea, null, null, 'Message')}
                    </div>
                    <button>Надіслати</button>
                </div>

            </form>
        </div>
    )
}
const FeedbackCreatorReduxForm = reduxForm({ form: 'feedback' })(Feedback)

export default FeedbackCreatorReduxForm;