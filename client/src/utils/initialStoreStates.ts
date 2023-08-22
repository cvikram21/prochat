/**
 * This files maintainns all the initial state values for the redux store.
 * This can be used to provide any default values to the optional variables inside the state.
 */

import { UserStateSlice } from './reduxStoreTypes';

export const initialUserState: UserStateSlice = {
	id: '',
	userName: '',
	fullName: '',
	userSettings: {
		preferredMode: 'light',
	},
	isFetching: false,
	didInvalidate: false,
};
