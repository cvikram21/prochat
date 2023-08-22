import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './index.scss';
import App from './App';
import userReducer from './reducers/userStateReducer';
import reportWebVitals from './reportWebVitals';

const store = configureStore({
	reducer: {
		user: userReducer,
	},
});
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
