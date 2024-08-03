import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import ResponsiveContextProvider from './contexts/ResponsiveContext';
import HomePage from './home/_components/HomePage';
import GlobalStyles from './styles/GlobalStyles';
import { defaultTheme } from './styles/theme';

// Create a client
const queryClient = new QueryClient();

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />

			<QueryClientProvider client={queryClient}>
				<ResponsiveContextProvider>
					<HomePage />
				</ResponsiveContextProvider>
			</QueryClientProvider>
		</ThemeProvider>
	);
}

export default App;
