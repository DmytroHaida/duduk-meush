const SET_LOGIN_POPUP = 'SET_LOGIN_POPUP';
const SET_REGISTRATION_POPUP ='SET_REGISTRATION_POPUP';
let initialState = {
    loginPopUp: false,
    registrationPopUp: false
}


const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_POPUP:
            return {
                ...state, loginPopUp: action.loginPopUp
            }
        case SET_REGISTRATION_POPUP:
            return {
                ...state, registrationPopUp: action.registrationPopup
            }
        default:
            return state
    }
}
//action creator
export const setPopupLoginMode = (loginPopUp) => ({ type: SET_LOGIN_POPUP, loginPopUp })
export const setRegistrationPopupMode = (registrationPopup) => ({ type: SET_REGISTRATION_POPUP, registrationPopup})

export const loginPopupMode = (e) => async (dispatch) => {
    dispatch(setPopupLoginMode(e))
}
export const registrationPopupClose = (e) => async (dispatch) => {
    dispatch(setRegistrationPopupMode(e))
}
export const registrationPopupMode = (e) => async (dispatch) => {
    dispatch(setRegistrationPopupMode(e))
}
export default LoginReducer;
