import React, { Component } from 'react'
import Headline from './headline2'
import Article1 from './art2-1'
import Article2 from './art2-2'

class pg2 extends Component{
    render(){
        return(
            <div className="pg1">
                <Headline />
                <div className="secondary">
                    <div className="item-a"><Article1 /></div>
                    <div className="item-b"><Article2 /></div>
                </div>
            </div>
        )
    }
}

export default pg2