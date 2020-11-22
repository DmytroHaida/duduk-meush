import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Content } from './components/content/content';
import { Footer } from './components/footer/footer';
import Header from './components/header/header';
import LoginContainer from './components/header/login/loginFormContainer';
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Content/>
				<Footer />
				<LoginContainer />
			</div>
		</BrowserRouter>
	);
}

export default App;
