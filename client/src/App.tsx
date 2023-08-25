import { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home/home';
import { HOME_PATH, CHAT_PATH } from './utils/constants';
import { PaletteMode } from '@mui/material';
import { grey, blueGrey } from '@mui/material/colors';
import ChatScreen from './pages/ChatScreen/chatScreen';

const App = () => {
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
							default: blueGrey[800],
						},
				  }),
		},
		typography: {
			fontFamily: ['Inconsolata'].join(','),
		},
		components: {
			MuiGrid2: {
				defaultProps: {
					// all grids under this theme will apply
					// negative margin on the top and left sides.
					disableEqualOverflow: true,
				},
			},
			MuiAppBar: {
				...(mode === 'light'
					? {
							styleOverrides: {
								colorPrimary: {
									backgroundColor: grey[200],
								},
							},
					  }
					: {
							styleOverrides: {
								colorPrimary: {
									backgroundColor: blueGrey[900],
								},
							},
					  }),
			},
		},
	});

	const proChatTheme = useMemo(() => {
		return createTheme(getDesignTokens(prefersDarkMode ? 'dark' : 'light'));
	}, [prefersDarkMode]);
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
