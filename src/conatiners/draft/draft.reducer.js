const INITIAL_STATE = {
    emailDetails: [],
    email: 'deeptikanta1234@gmail.com',
    starredEmail: [],
};
const DraftReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'RECEIVE_EMAIL_DEATILS_DRAFT': return { ...state, emailDetails: action.payload }
        case 'RECEIVE_LOGINED_USER_DRAFT': return { ...state, email: action.payload }
        case 'UPDATE_EMAIL_DETAILS_OF_USER_DRAFT': return { ...state, emailDetails: action.payload }
        case 'FETCH_STARRED_EMAIL_DRAFT': return { ...state, starredEmail: action.payload }
        case 'UN_MOUNT_STARRED_EMAIL_DRAFT': return { ...state, starredEmail: [] }
        default:
            return state;
    }
};
export default DraftReducer;