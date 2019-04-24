import React, { Component } from 'react'
import picture from "./images/chicken-cuisine-delicious-2124699.jpg"

class headline1 extends Component{
    render(){
        return(
            <div className="hl1">
                <div className="title-author">
                    <h2>Leading Article</h2>
                    <h5>By: <i>John Doe</i></h5>
                </div>
                <img src={picture} alt="chicken dinner" className="lead-img"/>
                <p className="article">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est libero, imperdiet porta enim quis, scelerisque efficitur quam. Ut sit amet quam sit amet nulla fringilla tempus. Integer quis velit eget nunc placerat volutpat. Donec nec diam et ligula mattis tincidunt. Phasellus commodo fringilla mattis. Suspendisse enim leo, hendrerit non pharetra vel, semper ac purus. Morbi nec massa ac dui maximus iaculis porta non est.<br />
                Aliquam erat volutpat. Suspendisse elementum dui ut cursus scelerisque. Integer lorem ante, dignissim eu dignissim pulvinar, aliquet non lectus. Nullam felis turpis, maximus non nibh sit amet, lacinia malesuada mauris. Curabitur ut pellentesque purus. Donec eget mattis est. Integer eu elit non nisl malesuada interdum. Sed sollicitudin interdum massa vitae pharetra. Nunc diam nibh, varius eget viverra vel, rhoncus eu ante. Quisque interdum dignissim sapien. Phasellus id venenatis mi. Sed eget congue elit, vitae hendrerit magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed dictum molestie urna, vitae mollis mi commodo vel. Donec egestas quam arcu. Nunc mauris arcu, pharetra et libero sed, interdum suscipit orci. <br/>
                Ut sit amet sagittis diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent sapien risus, convallis vitae vestibulum ac, facilisis commodo arcu. Vivamus ac urna quis erat aliquet ornare non sed quam. Aliquam nec tempus nisl. Sed vehicula metus odio, non tempus leo finibus dictum. Donec vel sem rhoncus, consectetur augue eget, blandit metus. Quisque dictum egestas nisl quis congue. Mauris gravida ex quis leo fermentum efficitur a ut felis. Phasellus blandit, leo et condimentum viverra, tortor erat luctus tortor, a rutrum ex tortor nec enim. Maecenas tempus diam in massa molestie, ac consequat nisl efficitur. Sed a volutpat turpis. Nulla et aliquet nisl. Mauris in tristique dui, non elementum neque. Proin a nibh vulputate nisl sagittis commodo.<br/>
                Nullam pretium ex vel diam feugiat scelerisque. Nam id mauris augue. Morbi lacus sem, mattis id erat in, viverra pulvinar felis. Nullam non porttitor urna, sit amet placerat nisl. Sed sit amet eleifend velit, eu lobortis massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum non maximus enim.<br/>
                Donec ultricies ipsum nec sem bibendum, ut tincidunt lorem tincidunt. Sed eu dolor sit amet eros auctor tincidunt eu ut arcu. Pellentesque posuere dui sapien, mattis sollicitudin turpis vestibulum id. Nunc non augue justo. Pellentesque vestibulum dolor vitae justo posuere ornare id vel magna. Nam consequat, libero vel sagittis blandit, velit metus rutrum quam, eget sagittis eros justo ut metus. Pellentesque tempus efficitur risus, in fermentum sapien posuere nec. Integer feugiat mollis dui at pharetra. Cras accumsan auctor urna, eu rutrum nunc. Aliquam vitae pulvinar purus, eu dignissim nunc. Duis nec felis lorem. Cras sit amet venenatis nisi. Aliquam sit amet nisl enim.</p>
            </div>
        )
    }
}

export default headline1