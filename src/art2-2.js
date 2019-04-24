import React, { Component } from 'react'
import picture from "./images/architecture-buildings-chicago-2056074.jpg"

class article2_2 extends Component{
    render(){
        return(
            <div className="hl1">
                <div className="title-author">
                    <h2>Second Article</h2>
                    <h5>By: <i>Tammy Jackson</i></h5>
                </div>
                <img src={picture} alt="city scape" className="art-img"/>
                <p className="article">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras at ultrices mauris. Vivamus et mi elementum orci pretium accumsan in nec nisi. Duis consequat sagittis felis. Duis augue sapien, vehicula vel efficitur eu, luctus non nisi. Suspendisse potenti. Integer nec fermentum felis, at gravida ante. Vivamus tristique mauris egestas, pellentesque tellus sed, iaculis quam. Sed eget est ut ipsum aliquam rhoncus. Maecenas tempus eget ex porttitor ultricies.<br/>
                Cras eget maximus tellus. Maecenas commodo mauris fringilla, hendrerit dui id, scelerisque nisl. In est ligula, tincidunt a euismod nec, tincidunt et urna. Maecenas ac eros vitae lectus vestibulum hendrerit. Nullam facilisis interdum neque. Nunc accumsan ultrices nibh id egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed quis leo ac turpis vehicula condimentum.<br />
                Phasellus ultrices mattis quam ut eleifend. Vestibulum volutpat massa urna, sit amet ornare sem hendrerit consequat. Aliquam euismod faucibus nibh eu suscipit. Nullam congue ligula ut felis consequat, sed placerat libero molestie. Donec ornare sit amet velit ac tempor. Nullam aliquam ipsum est, non eleifend ex tristique eu. Nam dignissim est a mauris dapibus pretium vitae sit amet magna. Morbi non vehicula quam. Suspendisse sed erat quis mauris facilisis luctus vitae at arcu. Nam blandit turpis non eros pharetra semper. Maecenas et efficitur erat. Maecenas risus arcu, venenatis ut tempus ultrices, finibus et magna.</p>
            </div>
        )
    }
}

export default article2_2