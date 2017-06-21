import React, {Component} from 'react'
import style from './style.css'
import store from '../store'
import {observer} from 'mobx-react'
@observer
export default class extends Component {

    componentDidMount(){
      store.timeout()
    }
    render() {
        let{flag} =store
        return (
            <div>
                <div className={style.loading_bg} style={flag?{opacity: 0,display:'none'}:null}>
                    <div className={style.loading} style={flag?{transform: 'translateY(-1307px)'}:null}></div>
                </div>
            </div>
        )
    }
}