import React, {Component} from 'react'
import style from './style.css'
import Loading from './loading'
export default class extends Component {
    
    render() {
        let {children} = this.props;
        return (
                <div>
                    <div className={style.main}>
                        <Loading/>
                        {children}
                    </div>
                </div>
        )
    }
}