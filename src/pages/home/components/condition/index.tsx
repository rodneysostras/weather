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
import { selectWeather, useAppSelector } from '~/hooks';

export default function Condition() {
    const { status, condition } = useAppSelector(selectWeather);
    return (
        <C.Container>
            <C.ContainerCondition>
                {status.name === 'START' || status.name === 'LOADING' ? (
                    <SkeletonLoader />
                ) : (
                    <C.IconCondition
                        src={'assets/img/' + condition.icon + '.svg'}
                        alt={condition.name}
                    />
                )}
            </C.ContainerCondition>
        </C.Container>
    );
}
