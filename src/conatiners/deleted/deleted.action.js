export const updateDeletedMail = (response) => (dispatch) => {
    dispatch({ payload: response, type: 'UPDATE_DELETED_EMAIL_DETAILS_OF_USER' })
}