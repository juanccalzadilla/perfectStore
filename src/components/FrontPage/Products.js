import React from 'react'
import { data } from '../../data'
import {useDispatch} from 'react-redux'
import { filterByID } from '../../helpers/filterByID';
import { addNewItem } from '../../actions/cart-actions';

export const Products = () => {
    const dispatch = useDispatch()

    const handleAddCart = (id)=> {

       dispatch(addNewItem(filterByID(id))) ;
    }
    return (
        <>
            <h1 className="text-center bg text p-4">Perfect Store - Products</h1>
            <div className="container-fluid d-flex flex-wrap">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5
                justify-content-center">
                    {data.map(data => (
                        
                        <div className="card-container d-flex txt flex-column m-4" key={data.id} >
                            <img src={data.img} alt={data.name}  className="img-fluid w-50" />
                            <div className="info">
                                <h3>{data.product_name}</h3>
                                <p>{data.description}</p>
                                <span className="price mx-auto w-100">€{data.price}</span>
                                <button className="btn btn-danger w-100 mr-3 ">BUY NOW</button>
                                <button className="btn btn-primary w-100" onClick={()=>handleAddCart(data.id)}>ADD TO CART</button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}
