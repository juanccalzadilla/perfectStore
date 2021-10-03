import React from 'react'

export const NavItem = ({data}) => {
    return (
        <div key={data.id}>
            <h1 className='mt-3 text-center'>{data.product_name}</h1>
            <div className='d-flex flex-colum' key={data.id}>
                <img src={data.img} className="rounded  d-block" alt="Girl in a jacket" width="150" height="150" />
                <p className=" w-100 size">{data.description}
                <br></br>
                <span> Price €{data.price}</span>
                </p>
            </div>
            <hr />
        </div>
    )
}
