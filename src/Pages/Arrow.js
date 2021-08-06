import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
function Arrow(props) {
    return (
        <div className='container d-flex justify-content-center'>
            <Link to={props.next}><img alt="img" src={'https://monophy.com/media/fv7Y1vactCYEZiVVHa/monophy.gif'} style={{width:"80px",opacity:"0.6"}} /></Link>
        </div>
    )
}

export default Arrow
