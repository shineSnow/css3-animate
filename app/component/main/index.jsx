import React, {Component} from 'react'
import Body from '../body'
import Content from './content'
export default class extends Component {
    constructor(props){
        super(props);
        const flag =props.location.query.is_app;
        this.state={app:flag}
    }
    render() {
        return (
           <Body>
                <Content
                    app={this.state.app}
                />
           </Body>
        )
    }
}