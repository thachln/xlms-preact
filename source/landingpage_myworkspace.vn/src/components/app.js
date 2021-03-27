import { h } from 'preact';
/* import { Router } from 'preact-router'; */

import Header from './header';

// Code-splitting is automated for `routes` directory
import Banner from './banner';
import Main from './main';
import Footer from './footer';

const App = () => (
	<div id="app">
		<Header />
		<Banner />
		<Main />
		<Footer />
		<a href="#" class="back-to-top"><i class="fa fa-chevron-up"> </i></a>
		{/* 		<Router>
			<Home path="/" />
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />
		</Router> */}
	</div>
)

export default App;
