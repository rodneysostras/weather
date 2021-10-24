// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import styled from 'styled-components';

import ImageSearch from '~/assets/img/search.svg';

export const Container = styled.form`
    display: flex;
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
    flex-grow: 1;
    height: 100%;
    width: 100%;
    border: 0;
    background-color: transparent;
    color: var(--text-color);
`;

export const IconSearch = styled.i`
    padding: 10px;
    margin: 0 10px;
    background: url(${ImageSearch}) no-repeat center;
    background-size: contain;
    filter: invert(0%) sepia(96%) saturate(11%) hue-rotate(115deg) brightness(100%) contrast(100%);
    opacity: 0.3;

    .theme-dark & {
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%)
            contrast(103%);
    }
`;
