import React, {useState} from 'react';

import Wrapper from '../components/hierarchy/Wrapper';
import Section from '../components/hierarchy/Section';
import Title from '../components/text/Title';
import List from '../components/grids/List';

export default function Notes({userid}) {
    [notes, setNotes] = useState([]);

    
    fetch("http://139.124.41.188/restos")
        .then(res => res.json())
        .then(res => {
            fetch("http://139.124.41.188/notes")
                .then(sres => sres.json())
                .then(sres => {
                    let notes_raw = sres.filter(e => e.client_id = userid);
                    let notes = [];
                    for (let i = 0 ; i < notes_raw.length ; i++) {
                        notes[i] = {
                            note_proprete: parseInt(notes_raw[i].note_proprete),
                            note_vaisselle: parseInt(notes_raw[i].note_vaisselle),
                            note_soin: parseInt(notes_raw[i].note_soin),
                            comment: notes_raw[i].comment
                        };
                        notes[i].name = res.filter(e => e._id == notes_raw[i].resto_id)[0].name;
                    }

                    setNotes(notes);
                })
        });

    return (
        <Wrapper>
            <Section>
                <Title>Mes notes</Title>
                <List items={notes}></List>
            </Section>

            <></>
        </Wrapper>
    );
}