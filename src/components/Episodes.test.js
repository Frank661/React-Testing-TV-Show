import React from 'react';
import Episodes from './Episodes';
import {render} from '@testing-library/react';
import {data} from '../api/fetchShow' 

test('Episode component renders empty then it renders with data', () => {
    //App is rendered
    const {rerender, getAllByTestId, queryAllByTestId} = render(<Episodes episodes={[]}/>)

    //check that app is not recieving episodes
    const episodes = queryAllByTestId(/episode/i);
    expect(episodes).toHaveLength(0);

    //rerender and check mock data is being rendered
    rerender(<Episodes episodes={data}/>)
    const episodeData = getAllByTestId(/episode/i);
    expect(episodeData).toHaveLength(3);

})

