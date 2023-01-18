

import { FC } from 'react'
import '../pages/DetailProductPage.css'
import { Product, Products } from './interfaces/models';



interface Props {
    product: Product
}

export const DetailsProductPage:FC<Props> = ({ product }) => {


    const { images } = product


    return (
        <div className="wrapper">
            <div className="card-container">
                <div className="card-title">
                    <h2 className='card-title-item'>{ product.brand }</h2>
                </div>
            <div className="card-subtitle">
                <h3>{ product.category }</h3>
            </div>
            <div className="image-description-container">
                <img className='imgage-product' src={ images[0] } alt={ product.brand } />
                <h4>{ product.description }</h4>
            </div>
            <div className="price-card">
                ${product.price} /<span className='stock-item'>Stock:  { product.stock }</span>
            </div>
            </div>
        </div>
    )
}

export default DetailsProductPage