import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const Sneaker = () =>{
  
  const sneakers = JSON.parse(localStorage.getItem('sneakers'))
  const [onlyOneSneaker, setOnlyOneSneaker] = useState();
  

  const [id, setId] = useState();
  const getId = () => {
    const id = JSON.parse(localStorage.getItem('sneakerId'));
    setId(id);
  }

  useEffect(() => getId(), [id])
  useEffect(() => {
    const onlyOneSneaker = sneakers.filter((sneaker) => sneaker.id === id);
    setOnlyOneSneaker(...onlyOneSneaker);
    console.log(...onlyOneSneaker)
  }, [id])

  return(

   <div>
    <div style={{width: "70%", display: "flex", marginLeft: "15%", alignItems: "center", justifyContent: "center", marginTop: "6rem"}}>
      <div style={{background: "rgb(236, 235, 235)", borderRadius: "0.2rem"}}>
    {!!onlyOneSneaker ? <img src={onlyOneSneaker.main_picture_url} alt="" style={{height: "26rem"}}/> : null}
    {!!onlyOneSneaker ? <img src={onlyOneSneaker.original_picture_url} alt="" style={{height: "12rem"}}/> : null}
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
    <h1>Detalhes</h1>
    {!!onlyOneSneaker ? <p>Nome: {onlyOneSneaker.name}</p> : null}
    {!!onlyOneSneaker ? <p>Cor: {onlyOneSneaker.keywords[0]}</p> : null}
    {!!onlyOneSneaker ? <p>{onlyOneSneaker.slug}</p> : null}
    </div>
    </div>
    
    </div>
   </div>
    )
}

export default Sneaker