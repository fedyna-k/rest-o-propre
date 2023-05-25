import React from 'react';

import Wrapper from '../components/hierarchy/Wrapper';
import Section from '../components/hierarchy/Section';
import Title from '../components/text/Title';
import List from '../components/grids/List';
import Grid from '../components/grids/Grid';

export default function Suivi() {
    return (
        <Wrapper>
            <Section>
                <Title>Statistique et bilan</Title>
                <Grid 
                    items={[
                        1, 1, 1, 1, 1, 1
                    ]}
                    />
            </Section>

            <Section>
                <Title>Suivi DLC</Title>
                <List items={[1, 1, 1, 1, 1, 1, 1]}></List>
            </Section>

            <Section>
                <Title>Chaîne du froid</Title>
                <List items={[1, 1, 1, 1, 1, 1, 1]}></List>
            </Section>
        </Wrapper>
    );
}