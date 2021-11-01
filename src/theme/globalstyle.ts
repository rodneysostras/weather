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
    --bg-body: #f3f3f3;
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
    min-height: 100vh;
}

body {
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    line-height: 1.5;

    color: var(--text-color);
    background-color: var(--bg-body);
    transition: background 0.2s linear;
}

#root {
    display: grid; 
    grid-template-columns: 100%; 
    grid-template-rows: 90px 1fr 60px; 
    gap: 0px 0px; 
    grid-template-areas: 
        "header"
        "main"
        "footer"; 
    width: 100vw;
    max-width: 1280px;
    margin: 0 auto;
}

a {
    text-decoration: none;
    color: var(--text-color);
}

`;

export default GlobalStyle;
