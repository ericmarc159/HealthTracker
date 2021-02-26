import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to = '*' className= 'mainPage'>
                Main
            </Link>
           
        </div>
    )
}

export default Header