import React from 'react'
import { useEffect, useState} from 'react';
import axios from 'axios';

function Carrinho() {

    const [sneakers, setSneakers] = useState([]);
    const productsCar = JSON.parse(localStorage.getItem('productsCar'));
    let product1 = [];

    const getApi = async () => {
        const snkrAPI = await axios.get("http://127.0.0.1:5500/arquivo.html");
        setSneakers(snkrAPI.data.sneakers);
      }
    
      useEffect(() => {getApi()}, []);

      for(let i = 0; i < productsCar.length; i++){
        const product = sneakers.filter((sneaker) => (sneaker.id === productsCar[i]));
        product1.push(...product);
      }

   
     

  return (
    <div className='container'>

        {  product1.map((product) => 
        <div className='divSneakers'>
            <img className='airJordanImg' src={product.main_picture_url} alt="sneaker-img"/>
        </div>)}
    </div>
  )
}

export default Carrinho;