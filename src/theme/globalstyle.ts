// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --bg-body: #fafafa;
    --text-color: #000;
}

:root.theme-dark {
    --bg-body: #292C35;
    --text-color: #fff;
}

* {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

html, body #root {
    height: 100%;
}

body {
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    line-height: 1.5;

    color: var(--text-color);
    background-color: var(--bg-body);
    transition: background 0.2s linear;
    transition: color 0.2s linear;
}

`;

export default GlobalStyle;
