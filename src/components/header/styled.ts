// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;

    height: 90px;
    width: 100%;
    padding: 0 10vw;
`;

export const ContainerToggle = styled.div`
    position: absolute;
    /* top: 15px; */
    right: 15px;
`;
