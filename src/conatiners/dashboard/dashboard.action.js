export const fetchUserDetails = (response) => (dispatch) => {
      dispatch({ payload: response, type: 'RECEIVE_EMAIL_DEATILS' });

};


export const updateEmailDetails = (response) => (dispatch) => {
      dispatch({ payload: response, type: 'UPDATE_EMAIL_DETAILS_OF_USER' })
}
export const fetchLoginUser = (response) => (dispatch) => {
      dispatch({ payload: response, type: 'RECEIVE_LOGINED_USER' });
}

export const fetchstarredMail=(response)=>(dispatch)=>{
      dispatch({payload:response,type:'FETCH_STARRED_EMAIL'})
}
export const clearStarred=()=>(dispatch)=>{
      dispatch({type:'UN_MOUNT_STARRED_EMAIL'})
}