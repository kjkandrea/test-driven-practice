import React from 'react';
import emoji from './shopby-emoji.gif';
import 'reset-css/reset.css';
import styled from 'styled-components'

const Styled = styled.div`
	background-color: red
`

const App = () => {
	return (
		<Styled>
			<header>
				<img src={emoji} className="App-logo" alt="logo" />
				<p>
					NHN Commerce <code>react + typescript + es-build</code> boilerplate
				</p>
			</header>
		</Styled>
	);
}

export default App;