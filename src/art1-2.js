import React, { Component } from 'react'
import picture from "./images/bay-beach-blue-waters-2031773.jpg"

class article1_2 extends Component{
    render(){
        return(
            <div className="hl1">
                <div className="title-author">
                    <h2>Third Article</h2>
                    <h5>By: <i>Mark Jefferson</i></h5>
                </div>
                <img src={picture} alt="ocean view" className="art-img"/>
                <p className="article">Suspendisse pharetra ullamcorper tempus. Integer sapien lacus, fermentum sed tempor hendrerit, volutpat vel neque. Aliquam ante eros, dapibus quis malesuada in, tempus nec nisl. Curabitur ac pretium lorem, vel rutrum tortor. Aliquam quis auctor magna, id placerat dolor. Nunc mi nisi, euismod eget convallis nec, congue non risus. Morbi ultricies consectetur ipsum vitae scelerisque. Nam mollis eros diam, in dictum magna condimentum nec. Donec at leo eros. Maecenas a eros et justo vestibulum euismod vitae sit amet ex. Fusce velit ipsum, ullamcorper id bibendum in, rhoncus sed nulla. Sed consequat pharetra leo, sit amet pretium purus mattis at. Phasellus sit amet efficitur mi, vel gravida velit. Duis ac tellus ut ipsum gravida elementum. Nullam posuere ante eu lacinia laoreet. Donec non erat venenatis, posuere sem facilisis, pulvinar magna.<br/>
                Mauris commodo massa eget lorem dignissim, non fringilla sapien vulputate. Duis cursus, tortor condimentum blandit rutrum, arcu tortor faucibus dolor, ut pellentesque arcu dui tincidunt ex. Sed lobortis enim sit amet velit lobortis, id tempus turpis blandit. Praesent id dolor pharetra, consectetur felis ac, hendrerit mauris. Curabitur suscipit posuere ornare. Nulla id odio orci. Integer varius posuere libero vel faucibus.<br />
                In in bibendum metus, sit amet commodo nibh. Nam in sapien massa. Nulla quis ultrices metus. Vestibulum volutpat, tellus quis aliquet porta, mauris magna facilisis tellus, in ultricies tellus dui vel purus. Curabitur a velit et sapien aliquet malesuada non a enim. Donec venenatis ex in leo consectetur iaculis. Quisque in neque et nisi condimentum bibendum vel id sem. Sed egestas auctor tristique. Phasellus mollis, mi non fermentum lacinia, lorem arcu gravida magna, nec hendrerit lectus diam at dolor. Donec pretium lectus velit, at lobortis purus fermentum nec. Phasellus ut erat mauris. Donec interdum, justo ut viverra auctor, ex lectus tristique lorem, non eleifend dolor sapien quis risus. Sed malesuada neque ac elit imperdiet, vitae tincidunt dui pulvinar. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis aliquet risus vitae ultricies.</p>
            </div>
        )
    }
}

export default article1_2