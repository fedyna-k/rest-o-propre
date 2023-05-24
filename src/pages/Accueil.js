import React from 'react';
import Map from '../components/map/Map';

import Wrapper from '../components/hierarchy/Wrapper';
import Section from '../components/hierarchy/Section';
import Title from '../components/text/Title';
import List from '../components/grids/List';
import Grid from '../components/grids/Grid';

export default function Accueil({onMap, location}) {
    if (onMap) {
        return (
            <Map initial={{
                longitude: location.coords.longitude,
                latitude: location.coords.latitude,
                longitudeDelta: 0.01,
                latitudeDelta: 0.01
                }} />
        );
    }


    return (
        <Wrapper>
            <Section>
                <Title>Catégories</Title>
                <Grid 
                    items={[
                        1, 1, 1, 1, 1, 1
                    ]}
                    />
            </Section>

            <Section>
                <Title>Sélectionné pour vous</Title>
                <List items={[1, 1, 1, 1, 1, 1, 1]}></List>
            </Section>
        </Wrapper>
    );
}