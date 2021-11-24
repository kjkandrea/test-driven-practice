import React, {useState} from 'react';
import styled from "styled-components";
import emoji from '../shopby-hacker.gif';

const SAreYouReadyCheckBox = styled.div`
	text-align: center; 
	margin-top: 20px;
	
	.happy-hacking {
		p {
			margin-top: 10px;
			font-size: 18px;
			font-weight: 600;
		}
	}
`

const AreYouReadyCheckBox = () => {
	const [isReady, setIsReady] = useState(false);

	const onChange = () => setIsReady(!isReady);

	return (
		<SAreYouReadyCheckBox>
			<label>
				<input type="checkbox" checked={isReady} onChange={onChange} />
				Are You Ready?
			</label>
			{isReady && <div className="happy-hacking">
        <img src={emoji} alt="Happy Hacker" />
				<p>Happy Hacking! 😻</p>
			</div>}
		</SAreYouReadyCheckBox>
	);
};

export default AreYouReadyCheckBox;