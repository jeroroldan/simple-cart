import React, { FC } from 'react'
import { useForm } from '../../hooks/useForm';
import { Product } from '../interfaces/models';
import { useEffect } from 'react';


interface Search {
    search: any,
}

interface Props {
    newValuesFiltered: (value: any) => void
}



export const Navbar:FC<Props> = ({ newValuesFiltered }) => {


    const { onInputChange,formState } = useForm({
        search:''
    });

    const { search } = formState as Search;


    const onFiltered = () => {
        newValuesFiltered(search)
    }

    useEffect(() => {
        onFiltered()
    },[search])

    
    return (
        <>  
            <div className="navbar">
                <div className="title-wrapper">
                    <h2 className='title-navbar'>free market </h2>
                </div>
                <div className="input-container">
                    <label className='search-label' htmlFor="search">Search:</label>
                    <input 
                        id='search' 
                        placeholder='search'  
                        className='input-search' 
                        type="text"
                        name= "search"
                        value={ search }
                        onChange={ onInputChange }
                    />
                </div>
            </div>
        </>
    )
}

export default Navbar