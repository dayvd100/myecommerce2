import React from 'react'
import { useEffect, useState} from 'react';
import axios from 'axios';

function Carrinho() {

    const [sneakers, setSneakers] = useState([]);
    const [productsCar, setProdctusCar] = useState(0);

    const getProduct = () => {
      const productsLocal = JSON.parse(localStorage.getItem('productsCar'));
      setProdctusCar(productsLocal);
    };

    useEffect(() => getProduct(), []);
   
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

      const remove = async (productIndex) => {
      console.log(product1[productIndex]);
      // localStorage.productsCar = JSON.stringify(product1);
      getApi();
      };

  return (
    <div className='container'>

        {product1.map((product, index) => 
        <div className='divSneakers' key={product.id}>
            <img className='airJordanImg' src={product.main_picture_url} alt="sneaker-img"/>
            <p className='description'>Modelo {product.name}</p>
            <p className='adicionarCarrinho' onClick={() => remove(index)}>Remover</p>
        </div>)}
    </div>
  )
}

export default Carrinho;