export const fetchUserDetailsInSpam = (response) => (dispatch) => {
      dispatch({ payload: response, type: 'RECEIVE_EMAIL_DEATILS_SPAM' });

};


export const updateEmailDetails = (response) => (dispatch) => {
      dispatch({ payload: response, type: 'UPDATE_EMAIL_DETAILS_OF_USER_SPAM' })
}
export const fetchLoginUser = (response) => (dispatch) => {
      dispatch({ payload: response, type: 'RECEIVE_LOGINED_USER_SPAM' });
}

export const fetchstarredMail=(response)=>(dispatch)=>{
      dispatch({payload:response,type:'FETCH_STARRED_EMAIL_SPAM'})
}
export const clearStarred=()=>(dispatch)=>{
      dispatch({type:'UN_MOUNT_STARRED_EMAIL_SPAM'})
}