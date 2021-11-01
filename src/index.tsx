// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ThemeProvider, { GlobalStyle } from './theme';

import { store } from '~/hooks/store';
import Home from '~/pages/home';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <GlobalStyle />
                <Home />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
