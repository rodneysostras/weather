// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as C from './styled';

import FooterBar from '~/components/footerbar';
import HeaderBar from '~/components/headerbar';

export default function App() {
    return (
        <C.Container>
            <HeaderBar />
            <C.Content>
                <C.Status>
                    <C.BackgroundImg />
                    <C.StatusIconWeather src="https://cdn-icons-png.flaticon.com/512/1542/1542643.png" />
                    <C.StatusWeather>Thunder</C.StatusWeather>
                    <C.StatusTemperature>13º</C.StatusTemperature>
                </C.Status>
            </C.Content>
            <FooterBar />
        </C.Container>
    );
}

//https://dribbble.com/shots/15162632-Weather-app
// https://dribbble.com/shots/1663525-Weather-Widget-freebie-HTML-CSS?list=shots&sort=popular&timeframe=now&offset=121
