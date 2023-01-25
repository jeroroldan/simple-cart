
import { FC, useEffect, useState } from 'react'
import '../pages/DetailProductPage.css'
import { Product, Products } from './interfaces/models';


interface Props {
    product: Product,
    isReadyChequed: boolean,
    checkedList: (product:Product , checked: boolean) => void
}

export const DetailsProductPage:FC<Props> = ({ product, checkedList, isReadyChequed }) => {

    const [ newProduct, setNewProduct ] = useState(product);

    const { images  } = product;

    const { isCheck  } = newProduct;

    useEffect(() => {
        setNewProduct(prev => {
            return {
                ...prev,
                isCheck:isReadyChequed
            }
        })
    }, [])

    
    const hanhleOnChange = (product: Product , isChecked: boolean) => {
        console.log(isChecked)
        checkedList(product, isChecked)
        setNewProduct(prev => {
            return {
                ...prev,
                isCheck: isChecked
            }
        })
    }
    
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
                <input type="checkbox" style={{ cursor:'pointer' }} value={product.brand} name='brand'   onChange={(e) => hanhleOnChange(product,e.target.checked)}/>
                <h3>{ isCheck ? 'Este producto está seleccionado' : '' }</h3>
                <p>Valoracion { '★'.repeat( product.rating ).padEnd(5,'☆') }</p>
            <div className="price-card">
                { product.price.toLocaleString("es-AR" ,{ style: "currency", currency:'ARS'})} /<span className='stock-item'>Stock:  { product.stock }</span>
            </div>
            </div>
        </div>
    )
}

export default DetailsProductPage