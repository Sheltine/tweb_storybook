import React, { Component } from 'react';
import { DropdownButton, ButtonToolbar,MenuItem, Glyphicon } from 'react-bootstrap'


class DropDown extends Component {
render(){
    const but = ['Filter'];

    function renderDropdownButton(title, i) {
    return (
        <DropdownButton
        bsStyle={title.toLowerCase()}
        title={title}
        key={i}
        id={`dropdown-basic-${i}`}
        >
        <MenuItem eventKey="1">Open issues and pull requests</MenuItem>
        <MenuItem eventKey="2">Your issues</MenuItem>
        <MenuItem eventKey="3">Your pull requests</MenuItem>
        <MenuItem eventKey="4">Everything assigned to you</MenuItem>
        <MenuItem eventKey="5">Everything mentionning you</MenuItem>
        <MenuItem eventKey="6"><Glyphicon glyph="share"/> Advanced search synthax</MenuItem>

        </DropdownButton>
    );
    }

    return (
    <ButtonToolbar>{but.map(renderDropdownButton)}</ButtonToolbar>

    )
}
}
export default DropDown