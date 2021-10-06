import React from 'react'

export const NavItem = ({data}) => {
    return (
        <div key={data.id}>
            <h3 className='mt-3 text-center'>{data.product_name}</h3>
            <div className='d-flex flex-colum' key={data.id}>
                <img src={data.img} className="rounded  d-block" alt="Girl in a jacket" width="50" height="50" />
                <p className=" w-100 size">{data.description}
                <br></br>
                <span className="price"> Price €{data.price}</span>
                </p>
            </div>
            <hr />
        </div>
    )
}
