import React from 'react'

export const NavItem = ({eventos}) => {

    return (
        <div key={eventos.id}>
            <h3 className='mt-3 text-center'>{eventos.product_name}</h3>
            <div className='d-flex flex-colum' key={eventos.id}>
                <img src={eventos.img} className="rounded  d-block" alt="Girl in a jacket" width="50" height="50" />
                <p className=" w-100 size">{eventos.description}
                <br></br>
                <span className="price"> Price €{eventos.price}</span>
                </p>
            </div>
            <hr />
        </div>
    )
}
