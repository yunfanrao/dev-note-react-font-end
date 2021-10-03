import React from "react";
import Note from "../Note";
import {CardDeck} from "react-bootstrap";

function Notes() {
    return (
        <div>
            <CardDeck>
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </CardDeck>
        </div>
    );
}

export default Notes;