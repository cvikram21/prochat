/**
 * This is used to manage the global state for the User using Redux.
 */

import { createSlice } from '@reduxjs/toolkit';
import { initialUserState } from '../utils/initialStoreStates';
import { Dispatch } from 'redux';

export function fetchUserData() {
	return (dispatch: Dispatch) => {
		dispatch(requestUserData());
	};
}

const userSlice = createSlice({
	name: 'user',
	initialState: initialUserState,
	reducers: {
		requestUserData(state) {
			state.isFetching = true;
			state.lastUpdated = new Date(Date.now());
		},
	},
});

const { actions, reducer } = userSlice;
export const { requestUserData } = actions;
export default reducer;
