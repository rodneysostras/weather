// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import styled from 'styled-components';

import ImageWorld from '~/assets/img/world.png';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    padding: 0 18vw;
`;

export const Content = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: calc(100% - 150px);
    max-width: 100%;
    margin: 0 auto;
    padding: 10px;
`;

export const BackgroundImg = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: url(${ImageWorld}) no-repeat center;
    background-size: contain;

    opacity: 0.35;
    z-index: -9999999;

    .theme-dark & {
        opacity: 0.2;
    }
`;

export const Status = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 300px;
    width: 350px;
    color: var(--text-color);
`;

export const StatusIconWeather = styled.img`
    height: 200px;
    width: 200px;
`;

export const StatusWeather = styled.span``;

export const StatusTemperature = styled.h1`
    font-size: 4rem;
`;
