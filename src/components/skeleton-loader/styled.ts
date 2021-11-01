// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import styled, { keyframes } from 'styled-components';

export interface ISkeletonLoader {
    radius?: string;
    height?: string;
    width?: string;
    margin?: string;
}

const loading = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const Skeleton = styled.span<ISkeletonLoader>`
    position: relative;
    display: block;
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '100%'};
    border-radius: ${({ radius }) => radius || '17px'};
    margin: ${({ margin }) => margin || '0'};
    overflow: hidden;

    background-color: #0000001f;

    &:after {
        content: '';
        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        right: 0;
        transform: translateX(-100%);
        z-index: 1;
        // prettier-ignore
        background: linear-gradient(90deg, #ffffff00, #ffffff4d, #ffffff00);
        animation: ${loading} 1.5s infinite;
    }
`;
