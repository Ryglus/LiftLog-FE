import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {ThemeProvider} from './contexts/ThemeContext';
import {ToastProvider} from "./contexts/ToastContext";
import {AccountProvider} from "./contexts/AccountContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <ToastProvider>
            <AccountProvider>
                <App/>
            </AccountProvider>
        </ToastProvider>
    </ThemeProvider>
);