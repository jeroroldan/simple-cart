import { useEffect, useState } from 'react';
import { Navbar } from './components';
import DetailsProductPage from './DetailProductPage';
import { Products, Product } from './interfaces/models';


export const ProductsListPage = () => {


    const [ productsCategory, setProductsCategory ] = useState<Product[]>([]);
    const [ data , setData ] = useState<Product[]>(productsCategory);
    const [isFiltered, setIsFiltered] = useState(false);
    const [selected, setSetSelected] = useState<Set<number>>(() => new Set());
    const [ isReadyChequed , setIsReadyChequed ] = useState(false)

    let search: Product[];
    const getProducts = async() => {
        const resp = await fetch('https://dummyjson.com/products');
        const productsData: Products = await resp.json();

        const { products } = productsData;
        setProductsCategory( products )

    }

    useEffect(() => {
        getProducts(); 
    },[])


    const newValuesFiltered = ( inputValue: string ) => {
        setIsFiltered(inputValue !== '')
        const auxListProduct = [...productsCategory];
        search = auxListProduct.filter(item => item.brand.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
        setData(search)

        if(inputValue.length <= 0){
            setData(productsCategory)
        }
    }

    const checkedList = (product: Product , checked: boolean) => {

        const buffer = structuredClone(selected)
        if(checked){
            buffer.add(product.id)
            setIsReadyChequed(true)
        }else if(!checked){
            buffer.delete(product.id)
            setIsReadyChequed(false)
        }
            setSetSelected(buffer)
            console.log('hol')
    }



    return (
        <>  
            <Navbar  newValuesFiltered={ newValuesFiltered } />
            <div style={{ display:'flex', textAlign:'center' }}>
                <h3 style={{ color:'#fff', marginTop:150}}>Cantidad de productos seleccionados { selected.size }</h3>
                <div className="wrapper">
                    { isFiltered && data.length === 0 ? (<span style={{ color:'#fff', marginTop:'23px', margin:'auto 0' }}>'No se encontro ningin producto'</span>) : null }
                    {
                        !isFiltered ? productsCategory?.map( product => (
                            <DetailsProductPage checkedList={ checkedList } isReadyChequed={ isReadyChequed } key={ product.id } product={ product }   />
                        ))
                        :  data?.map( product => (
                            <DetailsProductPage checkedList={ checkedList } isReadyChequed={ isReadyChequed } key={ product.id } product={ product }   />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ProductsListPage