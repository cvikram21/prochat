import { FunctionComponent, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home/home';
import { HOME_PATH, CHAT_PATH } from './utils/constants';
import { PaletteMode } from '@mui/material';
import { grey, blueGrey } from '@mui/material/colors';
import ChatScreen from './pages/ChatScreen/chatScreen';

const App: FunctionComponent = () => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const getDesignTokens = (mode: PaletteMode) => ({
		palette: {
			mode,
			primary: {
				main: '#dede50',
			},
			secondary: {
				main: grey[800],
			},
			...(mode === 'light'
				? {
						background: {
							default: grey[200],
						},
				  }
				: {
						background: {
							default: blueGrey[900],
						},
				  }),
		},
		typography: {
			fontFamily: ['Inconsolata'].join(','),
		},
	});

	const proChatTheme = useMemo(
		() => createTheme(getDesignTokens(prefersDarkMode ? 'dark' : 'light')),
		[prefersDarkMode]
	);
	return (
		<ThemeProvider theme={proChatTheme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path={HOME_PATH} element={<Home />} />
					<Route path={CHAT_PATH} element={<ChatScreen />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};
export default App;
