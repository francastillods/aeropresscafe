import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { AeroPressCafeApp } from './AeroPressCafeApp';
import './styles/styles.scss';



const container =   document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(<AeroPressCafeApp />);