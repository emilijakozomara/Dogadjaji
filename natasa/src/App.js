
import { useEffect, useState } from 'react';
import './App.css';
import UnosDogadjaja from './components/UnosDogadjaja';
import TabelaDogadjaja from './TabelaDogadjaja';
import './UnosDogadjaja.css';
import './TabelaDogadjaja.css'

function App() {
const[dogadjaji,setDogadjaji]=useState([]);

useEffect(()=>{
  async function dohvatiDogadjaje(){
    const odgovor=await fetch('https://localhost:7073/api/Dogadjaji');
    const noviDogadjaji=await odgovor.json();
    setDogadjaji(noviDogadjaji);
  }
  dohvatiDogadjaje();
},[]);

async function sacuvajDogadjaj(dogadjaj){
  const odgovor=await fetch("https://localhost:7073/api/Dogadjaji",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(dogadjaj)
  });
  if(!odgovor.ok){
    console.log("Greska pri cuvanju dogadjaja");
  }
  const sacuvanDogadjaj = await odgovor.json();
  setDogadjaji(dogadjaji => [...dogadjaji, sacuvanDogadjaj]);
}

  return (
    <div className="App">
    
    <UnosDogadjaja sacuvajDogadjaj={sacuvajDogadjaj}/>
    <TabelaDogadjaja dogadjaji={dogadjaji}  />
    
    
    </div>
  );
}

export default App;

