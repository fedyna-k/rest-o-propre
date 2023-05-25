import React from 'react';

import Wrapper from '../components/hierarchy/Wrapper';
import Section from '../components/hierarchy/Section';
import Title from '../components/text/Title';
import List from '../components/grids/List';
import Grid from '../components/grids/Grid';

export default function AccueilPro() {
    return (
        <Wrapper>
            <Section>
                <Title>Tableau de bord</Title>
                <Grid 
                    items={[
                        1, 1, 1, 1, 1, 1
                    ]}
                    />
            </Section>

            <Section>
                <Title>Nouvelles notes</Title>
                <List items={[1, 1, 1, 1, 1, 1, 1]}></List>
            </Section>
        </Wrapper>
    );
}