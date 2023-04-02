import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useHref, useNavigate, useNavigation } from 'react-router-dom';

function Sneakers() {
  
  const [sneakers, setSneakers] = useState([]);
  const [productsCar, setProductsCar] = useState([]);
  const [search, setSearch] = useState("");
  const [sneakerSearched, setSneakerSearched] = useState(false);

  useEffect(() => {
    console.log(search);
    const sneakerSearched = sneakers.filter((sneaker) => sneaker.name.includes(search));
    setSneakerSearched(sneakerSearched)

  },[search]);

  const getApi = async () => {
    const snkrAPI = await axios.get("http://127.0.0.1:5500/arquivo.html");
    setSneakers(snkrAPI.data.sneakers);
    localStorage.sneakers = JSON.stringify(snkrAPI.data.sneakers);
    if(sneakerSearched){
      console.log("tem algo")
    }else{setSneakerSearched(snkrAPI.data.sneakers)}
  }

  useEffect(() => {getApi()}, []);

  const addInTheCar = (Sneaker) =>{
    productsCar.push(Sneaker);
    setProductsCar(productsCar);
    localStorage.productsCar = JSON.stringify(productsCar);
  }
  
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

  const navigate = useNavigate();

  const naviToSneakerPage = (id) => {
        navigate("/sneaker")
        localStorage.sneakerId = JSON.stringify(id);
  }

  return (
    <div className='container'>
      <div className='searchDiv'>
      <input className='search' placeholder='Pesquisar' onChange={(e) => setSearch(e.target.value)}/>
      </div>
        {sneakerSearched ? sneakerSearched.map((airJordan) => 
        <div key={airJordan.id} className='divSneakers'>
            <img className='airJordanImg' src={airJordan.main_picture_url} alt="sneaker"/>
            <p className='sneakerName'>{airJordan.brand_name}</p>
            <p className='snkrName'>{airJordan.name}</p>
            <p className='adicionarCarrinho' onClick={() => {{addInTheCar(airJordan)};{handleClick()}}}>Adicionar ao carrinho</p>
            <p className='adicionarCarrinho' onClick={() => {naviToSneakerPage(airJordan.id)}}>Ver produto</p>
            <Snackbar open={open} autoHideDuration={1200} onClose={handleClose} sx={{marginLeft: "42%"}}>
           <Alert onClose={handleClose} severity="success" sx={{ width: '100%', boxShadow: "none"}}>
              Adicionado com sucesso
           </Alert>
          </Snackbar>
        </div>) : null}
    </div>
  )
}

export default Sneakers;