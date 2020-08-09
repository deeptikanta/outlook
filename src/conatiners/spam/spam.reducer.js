const INITIAL_STATE = {
    emailDetails: [],
    email: 'deeptikanta1234@gmail.com',
    starredEmail: [],
};
const SpamReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'RECEIVE_EMAIL_DEATILS_SPAM': return { ...state, emailDetails: action.payload }
        case 'RECEIVE_LOGINED_USER_SPAM': return { ...state, email: action.payload }
        case 'UPDATE_EMAIL_DETAILS_OF_USER_SPAM': return { ...state, emailDetails: action.payload }
        case 'FETCH_STARRED_EMAIL_SPAM': return { ...state, starredEmail: action.payload }
        case 'UN_MOUNT_STARRED_EMAIL_SPAM': return { ...state, starredEmail: [] }
        default:
            return state;
    }
};
export default SpamReducer;