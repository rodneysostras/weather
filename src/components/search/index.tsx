// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from 'react';

import * as C from './styled';

export interface ISearch {
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    onChange?: React.FormEventHandler<HTMLInputElement>;
    placeholder?: string;
    value?: string;
    loading?: boolean;
}

export default function Search({ onSubmit, loading, ...props }: ISearch) {
    return (
        <C.Container onSubmit={onSubmit} autoComplete="off">
            {loading ? <C.IconLoading /> : <C.IconSearch />}
            <C.TextField {...props} type="text" name="search" disabled={loading} />
        </C.Container>
    );
}
