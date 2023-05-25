import React from 'react';

import Wrapper from '../components/hierarchy/Wrapper';
import Section from '../components/hierarchy/Section';
import Title from '../components/text/Title';
import List from '../components/grids/List';
import Grid from '../components/grids/Grid';

export default function Formations() {
    return (
        <Wrapper>
            <Section>
                <Title>En cours</Title>
                <List items={[1, 1, 1, 1, 1, 1, 1]}></List>
            </Section>

            <Section>
                <Title>Nouvelles formations</Title>
                <List items={[1, 1, 1, 1, 1, 1, 1]}></List>
            </Section>
        </Wrapper>
    );
}