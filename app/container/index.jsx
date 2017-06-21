import React,{Component} from 'react'

import {Router,hashHistory} from 'react-router'
import routerConfig from '../routerConfig'
export default class extends Component{
    render(){
        return(
            <Router history={hashHistory} routes={routerConfig}/>
        )
    }
}
