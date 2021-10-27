// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import styled from 'styled-components';

export const ButtonToggle = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 50%;
`;

export const IconButtonToggle = styled.i`
    border-radius: inherit;
    font-style: normal;

    &:before {
        content: '🌙';
        position: relative;
        display: block;
        height: 30px;
        width: 30px;
        line-height: 30px;
        border-radius: inherit;
        border: 3px solid #c2c2c2;
        background-color: #191970; // meia-noite
        transition: background 0.2s linear;
    }

    .theme-dark &:before {
        content: '☀️';
        border: 3px solid #fafafa;
        background-color: #87ceeb; // dia
    }
`;
