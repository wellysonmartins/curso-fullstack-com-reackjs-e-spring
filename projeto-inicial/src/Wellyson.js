import React, { Component } from 'react'
import User from './User'
import photo from './user.png'

class Wellyson extends Component {
    render() {
        return (
            <div>
                Eu sou um componente chamado Wellyson
                <User name="Wellyson Martins" photo={photo} />
            </div>
        );
    }
}

export default Wellyson;