import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Sneakers() {
    
  const [sneakers, setSneakers] = useState([]);
  const productsCar = [];

  const getApi = async () => {
    const snkrAPI = await axios.get("http://127.0.0.1:5500/arquivo.html");
    setSneakers(snkrAPI.data.sneakers);
  }

  useEffect(() => {getApi()}, []);

  const addInTheCar = (idSneaker) =>{
    productsCar.push(idSneaker);
    localStorage.productsCar = JSON.stringify(productsCar);
    console.log(productsCar);
  }

  const airJordans = sneakers.filter((sneaker) => sneaker.brand_name === 'Air Jordan' );
  console.log(airJordans)

  return (
    <div className='container'>
        {airJordans.map((airJordan) => 
        <div key={airJordan.id} className='divSneakers'>
            <img className='airJordanImg' src={airJordan.main_picture_url} alt="sneaker"/>
            <p className='sneakerName'>{airJordan.brand_name}</p>
            <p className='adicionarCarrinho' onClick={() => addInTheCar(airJordan.id)}>Adicionar ao carrinho</p>
        </div>)}
    </div>
  )
}

export default Sneakers;