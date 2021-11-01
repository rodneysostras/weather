// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import styled from 'styled-components';

import { CssContainerCommon } from '../styled-common';

import IconLocationPin from '~/assets/img/location-pin.svg';

export const Container = styled.section`
    ${CssContainerCommon}
`;

export const ContainerCondition = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    height: 64px;
    width: 100%;
`;

export const ValueTemperature = styled.span`
    display: inline-block;
    height: 100%;
    font-size: 6em;
    font-weight: bold;
    line-height: 4rem;
    text-align: right;
`;

export const ContainerUnitsTemperature = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 50px;
`;

export interface IItemUnitsTemperature {
    active: boolean;
}

export const ItemUnitsTemperature = styled.a<IItemUnitsTemperature>`
    line-height: 0.8rem;

    ${({ active }) => active && 'opacity: 0.5;'}
    ${({ active }) => active && 'cursor: default;'}
`;

export const SeparateUnitsTemperature = styled.span`
    border-left: solid 1px #868b90;
`;

export const ContainerLocation = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: end;
    justify-content: center;
    gap: 0 5px;

    min-height: 25px;
    width: 100%;
    max-width: 200px;

    line-height: 1rem;
    user-select: none;
`;

export const IconLocation = styled.i`
    display: inline-block;
    fill: black;
    height: 20px;
    width: 20px;
    margin: 0;

    transition: fill 0.2s linear;
    background: url(${IconLocationPin}) no-repeat center;
    background-size: contain;

    .theme-dark & {
        fill: white;
    }
`;

export const CityLocation = styled.h3`
    font-size: 1.17em;
    text-align: center;
    word-spacing: -5px;
`;

export const CountryLocation = styled.span`
    margin-top: 5px;
    font-size: 1.17em;
`;
