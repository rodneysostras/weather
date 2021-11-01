// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import styled, { css } from 'styled-components';

import ImagePuff from '~/assets/img/puff.svg';
import ImageSearch from '~/assets/img/search.svg';

export const Container = styled.form`
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
    padding: 5px;
    border-radius: 30px;
    background-color: rgb(194 194 194 / 35%);

    .theme-dark & {
        background-color: rgb(194 194 194 / 20%);
    }
`;

export const TextField = styled.input`
    flex-grow: 1 1 auto;
    height: 100%;
    width: 100%;
    border: 0;
    color: var(--text-color);
    background-color: transparent;
    font-weight: bold;
`;

const cssIcon = css`
    height: 30px;
    width: 30px;
    margin: 0 10px;

    background-size: contain;
    opacity: 0.3;

    .theme-dark & {
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%)
            contrast(103%);
    }
`;

export const IconSearch = styled.i`
    ${cssIcon}
    background: url(${ImageSearch}) no-repeat center;
`;

export const IconLoading = styled.i`
    ${cssIcon}
    background: url(${ImagePuff}) no-repeat center;
`;
