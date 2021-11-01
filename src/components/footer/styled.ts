// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import styled from 'styled-components';

export const Container = styled.footer`
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
`;

export const Copyright = styled.span`
    font-weight: 500;
`;
