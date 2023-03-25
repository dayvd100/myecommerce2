import React from 'react'
import { useEffect, useState} from 'react';

function Carrinho() {

    const [productsCar, setProdctusCar] = useState(0);

    const getProduct = () => {
      const productsLocal = JSON.parse(localStorage.getItem('productsCar'));
      setProdctusCar(productsLocal);
    };

    useEffect(() => getProduct(), []);

      if(productsCar <= 0)
      {return} 
        else {console.log(...productsCar);}

      const remover = (ind) => {
       let teste = productsCar.splice(ind, 1);
       teste = productsCar.filter((tes) => tes !== teste)
       setProdctusCar(teste);
      }


  return (
    <div className='container'>
        {productsCar.map((product, index) => 
        <div className='divSneakers' key={product.id}>
            <img className='airJordanImg' src={product.main_picture_url} alt="sneaker-img"/>
            <p className='description'>Modelo {product.name}</p>
            <p className='adicionarCarrinho' onClick={() => remover(index)} >Remover</p>
        </div>)}
    </div>
  )
}

export default Carrinho;