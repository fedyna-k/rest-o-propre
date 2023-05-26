import React, { useState } from 'react';
import Map from '../components/map/Map';

import Wrapper from '../components/hierarchy/Wrapper';
import Section from '../components/hierarchy/Section';
import Title from '../components/text/Title';
import List from '../components/grids/List';
import Grid from '../components/grids/Grid';

export default function Accueil({onMap, location}) {

    [restos, setRestos] = useState([]);

    fetch("http://139.124.41.188/restos")
        .then(res => res.json())
        .then(res => {
            fetch("http://139.124.41.188/notes")
                .then(sres => sres.json())
                .then(sres => {
                    for (let i = 0 ; i < res.length ; i++) {
                        let mean = 0;
                        let den = 0;
                        for (let n of sres) {
                            if (n.resto_id == res[i]._id) {
                                mean += parseInt(n.note_proprete) + parseInt(n.note_vaisselle) + parseInt(n.note_soin);
                                den += 3;
                            }
                        }
                        res[i].note = den ? Math.round(mean/den) : -1;
                    }

                    setRestos(res);
                })
        });

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
                    items={["Italien", "Fast-Food", "Asiatique", "Bistro", "Gastro", "Fusion"]}
                    image={true}
                    />
            </Section>

            <Section>
                <Title>Sélectionné pour vous</Title>
                <List items={restos}></List>
            </Section>
        </Wrapper>
    );
}