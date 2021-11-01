// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from 'react';

import Alert from '../alert';

import * as C from './styled';

import Search from '~/components/search';
import { useAppDispatch, useAppSelector, setCityWeather, selectWeather } from '~/hooks';

export default function Header() {
    const [search, setSearch] = React.useState('');
    const { status } = useAppSelector(selectWeather);
    const dispatch = useAppDispatch();

    function handlerSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(setCityWeather(search)).then(() => {
            setSearch('');
        });
    }

    return (
        <React.Fragment>
            <C.Container>
                <Search
                    placeholder="Pesquisa a cidade desejada"
                    onChange={(e) => setSearch(e.currentTarget.value)}
                    onSubmit={handlerSearch}
                    value={search}
                    loading={status.name === 'LOADING'}
                />
            </C.Container>

            {status.name === 'FAILED' ? <Alert value={status.message} /> : null}
        </React.Fragment>
    );
}
