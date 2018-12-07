import React, { Component } from 'react'
import ButtonAppBar from './ButtonAppBar'
import Parallax from './Parallax'
import Page from './Page'

export default class App extends Component {
    render(){
        return(
            <div>
                <ButtonAppBar />
                <Parallax />
                <Page />
            </div>
        )
    }
}