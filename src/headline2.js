import React, { Component } from 'react'
import picture from "./images/pexels-2124689.jpg"

class headline2 extends Component{
    render(){
        return(
            <div className="hl1">
                <div className="title-author">
                    <h2>Leading Article</h2>
                    <h5>By: <i>Sara Smith</i></h5>
                </div>
                <img src={picture} alt="snowy landscape" className="lead-img"/>
                <p className="article">Proin non auctor mi. In finibus, quam et sagittis posuere, erat nisi laoreet mi, sit amet dapibus augue tortor venenatis sem. Fusce rutrum massa mi, sit amet bibendum lectus aliquet ac. Quisque lectus sem, porta et ullamcorper sed, vulputate ultricies elit. Sed id eros risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam ullamcorper odio at diam tempus, in laoreet risus venenatis. In viverra ipsum dui, vel luctus mauris rhoncus at. Maecenas dapibus ligula magna, eget venenatis massa eleifend ac.<br />
                Nulla quis lectus sit amet sapien dictum suscipit. Integer sodales urna sit amet placerat gravida. Mauris porttitor finibus aliquam. Pellentesque at hendrerit ipsum. Praesent ullamcorper dolor a risus bibendum, sit amet scelerisque nisl efficitur. Maecenas ac ultrices urna. Fusce lobortis ut libero placerat sagittis. Mauris varius imperdiet eleifend. Nullam sed tortor lorem.<br/>
                Proin nec blandit ex. Vivamus vitae lacinia erat. Cras eget lacus mi. Integer blandit elit id consequat fermentum. Aliquam quis sapien ligula. Nunc mi erat, blandit nec laoreet ut, fermentum sit amet quam. Mauris scelerisque in risus ac feugiat.<br/>
                Curabitur sapien sem, facilisis vel sem non, ultrices sodales nisl. Pellentesque nec urna eleifend nulla laoreet faucibus quis id odio. Donec rutrum, purus eu accumsan aliquam, mauris lacus scelerisque massa, eget scelerisque augue quam id mauris. In hac habitasse platea dictumst. Quisque sit amet velit a leo maximus mattis. Aenean leo augue, pulvinar sit amet elit quis, dignissim varius eros. Nulla scelerisque urna vitae ex aliquet, at facilisis metus facilisis. Ut elementum dapibus quam sit amet ultrices. Donec aliquam arcu in libero varius imperdiet.<br/>
                Integer dignissim vel leo eget posuere. Nam faucibus ultrices arcu. Nulla est metus, semper sed faucibus et, pretium non ante. Etiam fermentum sodales viverra. Maecenas nisi quam, ultrices ut sapien vitae, hendrerit dignissim tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec varius elit blandit luctus tincidunt. Nunc id lobortis tellus, eget luctus ex.</p>
            </div>
        )
    }
}

export default headline2