import React from 'react'
import {render} from 'react-dom'

import {AppContainer} from 'react-hot-loader'
import 'react-hot-loader/patch'

import 'ASSETS/font/index.css'
import 'ASSETS/css/reset.css'
import 'animate.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from './container'


const wap = document.getElementById('wap');
render(
    <AppContainer>
    <App />
    </AppContainer>,wap
)

if(module.hot){
    render(
        <AppContainer>
            <App />
        </AppContainer>,wap
    )
}
