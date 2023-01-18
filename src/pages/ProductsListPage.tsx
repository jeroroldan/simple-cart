import { useEffect, useState } from 'react';
import { Navbar } from './components';
import DetailsProductPage from './DetailProductPage';
import { Products, Product } from './interfaces/models';


export const ProductsListPage = () => {


    const [ productsCategory, setProductsCategory ] = useState<Product[]>([]);

    let search: Product[];
    const getProducts = async() => {
        const resp = await fetch('https://dummyjson.com/products');
        const productsData: Products = await resp.json();

        const { products } = productsData;
        setProductsCategory( products )

    }

    const getValueFilter = () => {
        
    }

    const newValuesFiltered = ( inputValue: string ) => {
        const auxListProduct = [...productsCategory];
        search = auxListProduct.filter(item => item.brand.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
        setProductsCategory(search)

        if(inputValue.length <= 0){
            getProducts()
        }

    }

    useEffect(() => {
        getProducts(); 
    },[])


    return (
        <>  
            <Navbar newValuesFiltered={ newValuesFiltered } />
            <div className="wrapper">
                {
                    productsCategory?.map( product => (
                        <DetailsProductPage key={ product.id } product={ product }   />
                    ))
                }
            </div>
        </>
    )
}

export default ProductsListPage