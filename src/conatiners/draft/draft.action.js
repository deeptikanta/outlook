export const fetchUserDetailsInDraft = (response) => (dispatch) => {
      dispatch({ payload: response, type: 'RECEIVE_EMAIL_DEATILS_DRAFT' });

};


export const updateEmailDetails = (response) => (dispatch) => {
      dispatch({ payload: response, type: 'UPDATE_EMAIL_DETAILS_OF_USER_DRAFT' })
}
export const fetchLoginUser = (response) => (dispatch) => {
      dispatch({ payload: response, type: 'RECEIVE_LOGINED_USER_DRAFT' });
}

export const fetchstarredMail=(response)=>(dispatch)=>{
      dispatch({payload:response,type:'FETCH_STARRED_EMAIL_DRAFT'})
}
export const clearStarred=()=>(dispatch)=>{
      dispatch({type:'UN_MOUNT_STARRED_EMAIL_DRAFT'})
}