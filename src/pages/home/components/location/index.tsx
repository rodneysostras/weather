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

function celsiusToFahrenheit(n: number) {
    return Math.floor(n * (9 / 5) + 32);
}

export default function Info() {
    const [fahrenheit, setFahrenheit] = React.useState(false);
    const { status, location } = useAppSelector(selectWeather);

    const temp = fahrenheit ? celsiusToFahrenheit(location.temp) : location.temp;

    function handlerItemUnits(e: React.FormEvent<HTMLAnchorElement>, value: boolean) {
        e.preventDefault();
        e.currentTarget.classList.remove('active');
        setFahrenheit(value);
    }

    function Temperature() {
        return (
            <React.Fragment>
                <C.ValueTemperature>{temp}</C.ValueTemperature>
                <C.ContainerUnitsTemperature>
                    <C.ItemUnitsTemperature
                        href=""
                        onClick={(e) => handlerItemUnits(e, false)}
                        active={!fahrenheit}
                    >
                        ºC
                    </C.ItemUnitsTemperature>
                    <C.SeparateUnitsTemperature />
                    <C.ItemUnitsTemperature
                        href=""
                        onClick={(e) => handlerItemUnits(e, true)}
                        active={fahrenheit}
                    >
                        ºF
                    </C.ItemUnitsTemperature>
                </C.ContainerUnitsTemperature>
            </React.Fragment>
        );
    }

    function Location() {
        return (
            <React.Fragment>
                <C.CityLocation>
                    <C.IconLocation />
                    {location.name}
                </C.CityLocation>
                <C.CountryLocation>{location.country}</C.CountryLocation>
            </React.Fragment>
        );
    }

    // function Location() {
    //     return (
    //         <React.Fragment>
    //             <p>
    //                 <C.IconLocation />
    //                 <strong>{location.name}</strong> {location.country}
    //             </p>
    //         </React.Fragment>
    //     );
    // }
    return (
        <C.Container>
            <C.ContainerCondition>
                {status.name === 'START' || status.name === 'LOADING' ? (
                    <SkeletonLoader />
                ) : (
                    <Temperature />
                )}
            </C.ContainerCondition>
            <C.ContainerLocation>
                {status.name === 'START' || status.name === 'LOADING' ? (
                    <SkeletonLoader />
                ) : (
                    <Location />
                )}
            </C.ContainerLocation>
        </C.Container>
    );
}
