import React, { Component } from 'react'
import picture from "./images/pexels-2031751.jpg"

class article1_1 extends Component{
    render(){
        return(
            <div className="hl1">
                <div className="title-author">
                    <h2>Second Article</h2>
                    <h5>By: <i>John Doe</i></h5>
                </div>
                <img src={picture} alt="candles" className="art-img"/>
                <p className="article">Etiam a ex nec metus condimentum lacinia vitae vitae mauris. In mattis orci et elit molestie, et dapibus sem egestas. Cras rhoncus arcu in libero tincidunt efficitur. Proin lacinia in neque aliquam malesuada. Duis euismod dapibus lectus, vel tempus diam tristique vitae. Maecenas vel posuere velit, eget tincidunt elit. Suspendisse sit amet egestas eros. Suspendisse vitae purus non lectus pellentesque mattis nec id ex. Ut porta libero at sem efficitur porttitor. Cras egestas iaculis magna nec consectetur.<br/>
                Vestibulum at molestie purus. Curabitur non lectus porttitor, semper lacus id, tristique nulla. Morbi vitae maximus tellus. In iaculis faucibus justo, quis imperdiet elit tincidunt facilisis. Sed ipsum lectus, pellentesque quis arcu vitae, aliquam tempus libero. Cras consectetur velit vel tortor vulputate suscipit. Nam imperdiet et ligula ac rhoncus. Nam sed lorem sem. In pretium velit scelerisque, euismod urna a, luctus nisl. Quisque venenatis rutrum tortor, at consectetur lorem faucibus nec. Vivamus venenatis vitae leo non maximus. In hac habitasse platea dictumst. Nunc eu erat consectetur nunc viverra mollis. Fusce semper nunc et mi commodo euismod.<br />
                Donec ac volutpat eros, in auctor sem. Cras vestibulum id justo at sollicitudin. Aliquam fringilla sagittis purus. Pellentesque fermentum ligula in ligula euismod, sit amet consequat ex maximus. Etiam ac urna vitae dolor auctor finibus quis ac felis. Morbi id efficitur purus. Suspendisse et feugiat neque. Aenean non quam ullamcorper, gravida sapien dapibus, pellentesque arcu. Proin aliquam tortor eget justo rhoncus ultrices. Fusce hendrerit lorem ac elit interdum tincidunt. Duis at tortor molestie, porta lectus nec, molestie ligula.</p>
            </div>
        )
    }
}

export default article1_1