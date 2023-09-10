import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'ui';
import App from './app/App.tsx';
import './index.css';
import { store } from './app/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Router>
					<Routes>
						<Route path="/*" element={<App />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
