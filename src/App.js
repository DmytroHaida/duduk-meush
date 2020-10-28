import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Content } from './components/content/content';
import { Footer } from './components/footer/footer';
import Header from './components/header/header';
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Content/>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
