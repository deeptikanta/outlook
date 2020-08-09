const INITIAL_STATE = {
    emailDetails: [],
};
const DeletedMailReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_DELETED_EMAIL_DETAILS_OF_USER': return { ...state, emailDetails: [...state.emailDetails, action.payload] }
        default:
            return state;
    }
};
export default DeletedMailReducer;