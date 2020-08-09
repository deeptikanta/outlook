import { combineReducers } from "redux";
import DashBoardReducer from '../conatiners/dashboard/dashboard.reducer';
import SpamReducer from '../conatiners/spam/spam.reducer';
import DraftReducer from '../conatiners/draft/draft.reducer';
import DeletedMailReducer from '../conatiners/deleted/deleted.reducer';

export default combineReducers({ DashBoardReducer, SpamReducer, DraftReducer, DeletedMailReducer });
