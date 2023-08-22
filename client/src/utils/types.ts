/**
 * This file contains the type definitions for different variables we use in our app
 */

export interface User {
	id: string;
	name: string;
	fullName: string;
	settings: UserSettings;
}

export interface UserSettings {
	preferredMode?: string;
}
