import React from 'react';

import Wrapper from '../components/hierarchy/Wrapper';
import Section from '../components/hierarchy/Section';
import Title from '../components/text/Title';
import List from '../components/grids/List';

export default function Notes() {
    return (
        <Wrapper>
            <Section>
                <Title>Mes notes</Title>
                <List items={[1, 1, 1, 1, 1, 1, 1]}></List>
            </Section>

            <></>
        </Wrapper>
    );
}