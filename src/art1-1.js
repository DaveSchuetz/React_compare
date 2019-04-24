import React, { Component } from 'react'
import picture from "./images/pexels-2031736.jpg"

class article1_1 extends Component{
    render(){
        return(
            <div className="hl1">
                <div className="title-author">
                    <h2>Second Article</h2>
                    <h5>By: <i>Sara Smith</i></h5>
                </div>
                <img src={picture} alt="drink on the beach" className="art-img"/>
                <p className="article">Suspendisse sagittis tincidunt dui nec iaculis. Mauris tincidunt, dolor eu suscipit sodales, felis dui cursus diam, vestibulum consequat justo quam sit amet elit. Sed at leo orci. Donec faucibus consectetur massa tempus placerat. Maecenas sit amet leo tortor. Donec a sapien in leo vulputate semper ut sit amet quam. Fusce pretium ultricies placerat. Integer et sodales odio. Nunc lorem neque, fringilla vel elit non, tristique fringilla risus. Phasellus efficitur ante erat, vel gravida diam gravida a. Nunc sit amet nisl eget odio feugiat vulputate at sed arcu. Pellentesque nulla metus, viverra ac enim vitae, molestie facilisis orci. Donec tortor lectus, vulputate a erat nec, interdum condimentum massa.<br/>
                Nunc sit amet leo et ante efficitur congue. Etiam in lorem sed orci convallis semper non id elit. Maecenas vitae fringilla nisl. Vivamus pharetra dignissim tellus, id rutrum neque pharetra porta. Ut sit amet odio sapien. Vestibulum eleifend aliquet nibh ut tincidunt. Maecenas placerat et ex varius maximus. Etiam lacus ipsum, congue in tempor a, lacinia eget orci. Ut ac pellentesque felis, sit amet suscipit mi. Vestibulum iaculis, arcu sed scelerisque maximus, justo leo fringilla nunc, non dapibus nulla velit sed quam. Phasellus vehicula odio vitae orci finibus, vel pulvinar justo semper. Aenean in mi scelerisque, volutpat nisl et, condimentum mauris. Sed suscipit fringilla nulla, quis malesuada sapien imperdiet id.<br />
                Etiam commodo, nisl at convallis ullamcorper, velit lectus maximus ipsum, eu volutpat ex metus sed quam. Etiam malesuada neque sit amet luctus dictum. Fusce quis laoreet odio, sed efficitur est. Proin tempus vitae justo eget tincidunt. Nam non lacinia eros. Etiam ultrices, nulla ut feugiat varius, ex elit tincidunt odio, eget fringilla purus lorem sed tortor. Nullam metus leo, tincidunt vel leo vel, facilisis aliquam nulla.</p>
            </div>
        )
    }
}

export default article1_1