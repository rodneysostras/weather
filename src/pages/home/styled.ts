// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import styled from 'styled-components';

import ImageWorld from '~/assets/img/world.png';

export const LayoutContainer = styled.main`
    grid-area: main;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    &:before {
        content: ' ';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;

        opacity: 0.3;
        z-index: -1;

        background: url(${ImageWorld}) center no-repeat;
        background-size: contain;
        background-position-y: 0;
    }

    .theme-dark &:before {
        opacity: 0.2;
    }
`;

export const MainLayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;

    width: 100%;
`;
