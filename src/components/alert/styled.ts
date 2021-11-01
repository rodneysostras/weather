// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 10px;
    right: 10px;

    padding: 10px;
    border-radius: 4px;
    background-color: #ff5252; //red
    color: #fff;

    box-shadow: 0 0 0 0 rgb(0 0 0 / 20%), 0 0 0 0 rgb(0 0 0 / 14%), 0 0 0 0 rgb(0 0 0 / 12%);
`;

export const IconAlert = styled.span``;

export const ContentAlert = styled.div`
    font-weight: bold;
    line-height: 34px;
`;

export const CloseAlert = styled.span`
    margin: 0 10px;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
`;
