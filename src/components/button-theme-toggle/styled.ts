// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import styled, { css } from 'styled-components';

import SvgMoon from '~/assets/img/night-moon.svg';
import SvgSun from '~/assets/img/sun.svg';

export const Wrapper = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 26px;
    width: 45px;
    padding: 5px;
    border-radius: 50px;
    border: 1px solid #0000001f;
    cursor: pointer;

    .theme-dark & {
        border-color: #ffffff1f;
    }
`;

export const Slider = styled.div`
    position: absolute;
    height: 18px;
    width: 18px;
    top: 3px;
    left: 2px;

    border-radius: 50px;

    background-color: #f9d65d;
    transition: left 0.3s ease-in-out;

    .theme-dark & {
        left: calc(100% - 20px);
    }
`;

export const Toggle = styled.input`
    display: none;
    height: 0;
    width: 0;
    background: transparent;
`;

const iconCss = css`
    position: relative;
    display: inline-block;
    height: 12px;
    width: 12px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        filter: invert(92%) sepia(1%) saturate(1115%) hue-rotate(42deg) brightness(91%)
            contrast(78%);
        background: url(${SvgMoon}) center no-repeat;
        background-size: contain;
    }
`;

export const IconMoon = styled.i`
    ${iconCss}

    &::before {
        background: url(${SvgMoon}) center no-repeat;
        background-size: contain;
    }

    .theme-dark &::before {
        filter: invert(100%) sepia(0%) saturate(7495%) hue-rotate(277deg) brightness(103%)
            contrast(102%);
    }
`;

export const IconSun = styled.i`
    ${iconCss}

    &::before {
        background: url(${SvgSun}) center no-repeat;
        background-size: contain;
    }

    html:not(.theme-dark) &::before {
        filter: invert(100%) sepia(0%) saturate(7495%) hue-rotate(277deg) brightness(103%)
            contrast(102%);
    }
`;
