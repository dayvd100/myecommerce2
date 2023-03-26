import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Search from '../components/search';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function Sneakers() {
  
  const [sneakers, setSneakers] = useState([]);
  const [productsCar, setProductsCar] = useState([]);

  const getApi = async () => {
    const snkrAPI = await axios.get("http://127.0.0.1:5500/arquivo.html");
    setSneakers(snkrAPI.data.sneakers);
  }

  useEffect(() => {getApi()}, []);

  const addInTheCar = (Sneaker) =>{
    productsCar.push(Sneaker);
    setProductsCar(productsCar);
    localStorage.productsCar = JSON.stringify(productsCar);
  }

  const airJordans = sneakers.filter((sneaker) => sneaker.brand_name === 'Air Jordan' );
  
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div className='container'>
      <div className='searchDiv'>
      <Search/>
      </div>
        {airJordans.map((airJordan) => 
        <div key={airJordan.id} className='divSneakers'>
            <img className='airJordanImg' src={airJordan.main_picture_url} alt="sneaker"/>
            <p className='sneakerName'>{airJordan.brand_name}</p>
            <p className='snkrName'>{airJordan.name}</p>
            <p className='adicionarCarrinho' onClick={() => {{addInTheCar(airJordan)};{handleClick()}}}>Adicionar ao carrinho</p>
            <Snackbar open={open} autoHideDuration={1200} onClose={handleClose}>
           <Alert onClose={handleClose} severity="success" sx={{ width: '100%', boxShadow: "none"}}>
              Adicionado com sucesso
           </Alert>
          </Snackbar>
        </div>)}
    </div>
  )
}

export default Sneakers;