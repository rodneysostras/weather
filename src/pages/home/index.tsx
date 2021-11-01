// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from 'react';

import Visual from './components/condition';
import Detail from './components/detail';
import List from './components/list';
import Info from './components/location';
import * as C from './styled';

import { Header as LayoutHeader, Footer as LayoutFooter } from '~/components';

export default function Home() {
    return (
        <React.Fragment>
            <LayoutHeader />
            <C.LayoutContainer>
                <C.MainLayoutContainer>
                    <Detail />
                    <Info />
                    <Visual />
                </C.MainLayoutContainer>
                <List />
            </C.LayoutContainer>
            <LayoutFooter />
        </React.Fragment>
    );
}
