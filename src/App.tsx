import React from 'react';
import emoji from './shopby-emoji.gif';

const App = () => {
	return (
		<div>
			<header>
				<img src={emoji} className="App-logo" alt="logo" />
				<p>
					NHN Commerce <code>react + typescript + es-build</code> boilerplate
				</p>
			</header>
		</div>
	);
}

export default App;