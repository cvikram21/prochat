/**
 * This file contains type definitions for all the redux state variables.
 */

import { UserSettings } from './types';

export interface StoreState {
	user: UserStateSlice;
}

export interface UserStateSlice {
	id: string;
	userName: string;
	fullName: string;
	userSettings: UserSettings;
	isFetching: boolean;
	didInvalidate: boolean;
	lastUpdated?: Date;
}
