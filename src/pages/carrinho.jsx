import React from 'react'
import { useEffect, useState} from 'react';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function Carrinho() {
    
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

    const [productsCar, setProdctusCar] = useState(0);

    const getProduct = () => {
      const productsLocal = JSON.parse(localStorage.getItem('productsCar'));
      setProdctusCar(productsLocal);
    };

    useEffect(() => getProduct(), []);

      if(productsCar <= 0)
      {return} 

      const remover = (ind) => {
       let productRemoved = productsCar.splice(ind, 1);
       productRemoved = productsCar.filter((tes) => tes !== productRemoved)
       setProdctusCar(productRemoved);
       localStorage.productsCar = JSON.stringify(productsCar);
      }


  return (
    <div className='container'>
        {productsCar.map((product, index) => 
        <div className='divSneakers' key={product.id}>
            <img className='airJordanImg' src={product.main_picture_url} alt="sneaker-img"/>
            <p className='description'>Modelo {product.name}</p>
            <p className='adicionarCarrinho' onClick={() => {{remover(index)}; {handleClick()}}} >Remover</p>
            <Snackbar open={open} autoHideDuration={1200} onClose={handleClose}>
           <Alert onClose={handleClose} severity="error" sx={{ width: '100%', boxShadow: "none"}}>
              Item removido
           </Alert>
          </Snackbar>
        </div>)}
    </div>
  )
}

export default Carrinho;