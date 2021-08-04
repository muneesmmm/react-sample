import React from 'react'

function Button({button, filter}) {
    return (
        <div className="buttons">
            {
                button.map((cat, i)=>{
                    return <button data-aos="fade-down" type="button" onClick={()=> filter(cat)} className="btn">{cat}</button>
                })
            }
        </div>
    )
}

export default Button;