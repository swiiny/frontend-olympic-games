import { ThemeProvider } from 'styled-components';
import ResponsiveContextProvider from './contexts/ResponsiveContext';
import HomePage from './home/_components/HomePage';
import GlobalStyles from './styles/GlobalStyles';
import { defaultTheme } from './styles/theme';

function App() {
	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<ResponsiveContextProvider>
					<GlobalStyles />
					<HomePage />
				</ResponsiveContextProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
