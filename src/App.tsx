import React from 'react';
import emoji from './shopby-emoji.gif';
import 'reset-css/reset.css';
import './assets/scss/style.scss'
import styled from 'styled-components';
import AreYouReadyCheckBox from "./components/AreYouReadyCheckBox";

const Styled = styled.div`
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    font-weight: 400;
    padding: 0.15em;
    font-size: 0.7em;
    background-color: rgba(255, 229, 100, 0.2);
    border-radius: 0.15em;
    margin: 0 0.5em;
  }

  header {
    min-height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #111;
  }

  .logo-area {
    margin-bottom: 20px;
  }

  h1 {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    font-size: 22px;
    font-weight: 500;
  }

  p {
    margin-bottom: 15px;
  }

  a {
    color: #0366d6;
  }
`;

const App = () => {
  return (
    <Styled>
      <header>
        <div className="logo-area">
          <img src={emoji} className="logo" alt="logo" />
        </div>
        <h1>NHN Commerce React boilerplate</h1>
        <p>
          <code>react + typescript + es-build</code>
        </p>
        <p>
          <a href="https://github.nhnent.com/ncp/react-boilerplate" target="_blank">
            https://github.nhnent.com/ncp/react-boilerplate
          </a>
        </p>
        <AreYouReadyCheckBox />
      </header>
    </Styled>
  );
};

export default App;
