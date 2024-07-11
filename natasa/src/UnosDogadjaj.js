import React from "react";
import { useState } from "react";

function UnosDogadjaja(props){
    const[id,setId]=useState("");
    const[naziv,setNaziv]=useState("");
    const[opis,setOpis]=useState("");
    const[tip,setTip]=useState("");
    const[pocetak,setPocetak]=useState("");
    const[kraj,setKraj]=useState("");
    const[besplatan,setBesplatan]=useState("");
    const[brojPrijava,setBrojPrijava]=useState("");


    async function sacuvajDogadjaj(e){
        e.preventDefault();
        try{
            await props.sacuvajDogadjaj({
                id:id,
                naziv:naziv,
                opis:opis,
                tip:tip,
                pocetak:pocetak,
                kraj:kraj,
                besplatan:besplatan,
                brojPrijava:brojPrijava
            });
            setId("");
            setNaziv("");
            setOpis("");
            setTip("");
            setPocetak("");
            setKraj("");
            setBesplatan("");
            setBrojPrijava("");
        }catch(error){
            console.log(error);
        }
    }
        return(
            <>
            <div className="form">
            <h2>Dodavanje novog dogadjaja</h2>
        <form className="form" name="forma" id="forma" onSubmit={sacuvajDogadjaj}>
            <div className="container1">
                <div className="lbls1">
            <label>Naziv</label><br/>
            <label>Tip</label><br/>
            </div>
            <div className="inputs1">
            <input type="text" name="naziv" id="naziv" value={naziv} onChange={e=>setNaziv(e.target.value)} required/>
            <select name="tip" id="tip" value={tip} onChange={e=>setTip(e.target.value)} required>
                <option value="zabava">Zabava</option>
                <option value="sport">Sport</option>
                <option value="radionica">Radionica</option>
                <option value="drugo">Drugo</option>
            </select>
            </div>
            <div className="lbls2">
            <label>Pocetak</label><br/>
            <label>Kraj</label><br/>
            </div>
            <div className="inputs2">
            <input type="date" name="pocetak" id="pocetak" value={pocetak} onChange={e=>setPocetak(e.target.value)}required/>
            <input type="date" name="kraj" id="kraj" value={kraj} onChange={e=>setKraj(e.target.value)}required/>
            </div>
            </div>
            <div className="div2">
            <label>Besplatan</label>
            <input type="radio" name="besplatan" id="besplatan-da" value="da" onChange={e=>setBesplatan(e.target.value)} />
            <label>Da</label>
            <input type="radio" name="besplatan" id="besplatan-ne" value="ne" onChange={e=>setBesplatan(e.target.value)} />
            <label>Ne</label>
            
            </div>
            <div className="div3">
            <label htmlFor="opis">Opis</label>
            <textarea value={opis} onChange={e=>setOpis(e.target.value)} required/>
                <button type="submit">Dodaj dogadjaj</button>
            </div>
        </form>
            </div>
            </>
        );
    }
export default UnosDogadjaja; 