// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from 'react';

import * as C from './styled';

import { SkeletonLoader } from '~/components';

export default function Detail() {
    return (
        <C.Container>
            {Array(3)
                .fill(0)
                .map((i) => (
                    <C.ItemDetail key={i}>
                        <SkeletonLoader />
                    </C.ItemDetail>
                ))}
        </C.Container>
    );
}
