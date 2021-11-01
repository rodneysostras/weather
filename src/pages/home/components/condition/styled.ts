// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import styled from 'styled-components';

import { CssContainerCommon } from '../styled-common';

export const Container = styled.section`
    ${CssContainerCommon}
`;

export const ContainerCondition = styled.div`
    height: 200px;
    width: 200px;
`;

export const IconCondition = styled.img`
    height: 100%;
    width: 100%;
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
    -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
`;
