// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

export { GlobalStyle } from './globalstyle';
import React from 'react';
import { StyleSheetManager } from 'styled-components';

const isDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;

export function setTheme(theme?: 'theme-dark' | 'theme-light' | undefined) {
    const root = document.documentElement;

    if (theme === undefined) {
        root.classList.toggle('theme-dark');
    } else if (theme === 'theme-dark') {
        root.classList.toggle('theme-dark', true);
    } else {
        root.classList.toggle('theme-dark', false);
    }

    const isSetDark = root.classList.contains('theme-dark');

    if (isSetDark && !isDarkSystem) {
        localStorage.setItem('dark-theme-weather-rs', 'true');
    } else if (!isSetDark && isDarkSystem) {
        localStorage.setItem('dark-theme-weather-rs', 'false');
    } else {
        localStorage.removeItem('dark-theme-weather-rs');
    }
}

export default function ThemeProvider(props: { children: React.ReactNode }) {
    const themeStorage = localStorage && localStorage.getItem('dark-theme-weather-rs');

    if (themeStorage !== null && themeStorage === 'true') {
        setTheme('theme-dark');
    } else if (themeStorage === null && isDarkSystem) {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }

    return (
        <StyleSheetManager disableVendorPrefixes={process.env.NODE_ENV === 'development'}>
            <React.Fragment>{props.children}</React.Fragment>
        </StyleSheetManager>
    );
}
