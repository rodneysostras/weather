// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from 'react';

import * as C from './styled';

export interface IAlert {
    value: string;
}

export default function Alert({ value }: IAlert) {
    const [hide, setHide] = React.useState(true);

    React.useMemo(() => setHide(false), [value]);

    function Popup() {
        setTimeout(() => setHide(true), 2000);
        return (
            <C.Container>
                <C.ContentAlert>{value}</C.ContentAlert>
                {/* <C.CloseAlert>&times;</C.CloseAlert> */}
            </C.Container>
        );
    }

    return <React.Fragment>{hide ? null : <Popup />}</React.Fragment>;
}
