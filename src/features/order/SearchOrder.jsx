import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
    const [query,setQuery] = useState('');
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        navigate(`/order/${query}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Enter order id'/>
        </form>
    )
}

export default SearchOrder