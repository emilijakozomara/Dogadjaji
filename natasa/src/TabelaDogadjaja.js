function TabelaDogadjaja(props){
  const dogadjaji=props.dogadjaji;
  return(
   <>
   <div className="naslov"><h2>Pregled svih dogadjaja</h2></div>
   <div className="pretraga">
       <input type="text" name="pretraga-polje" id="pretraga-polje"/>
       <button name="pretrazi-dugme" id="pretrazi-dugme">Pretrazi</button>
   </div>
   <table className="tabela">
       <thead>
           <th>Naziv</th>
           <th>Opis</th>
           <th>Tip</th>
           <th>Pocetak</th>
           <th>Kraj</th>
           <th>Besplatan</th>
           <th>Broj prijava</th>
           <th>Akcija</th>
       </thead>
       <tbody>
           {dogadjaji.map(dogadjaj=>(
               <tr key={dogadjaj.id}>
                   <td>{dogadjaj.naziv}</td>
                   <td>{dogadjaj.opis}</td>
                   <td>{dogadjaj.tip}</td>
                   <td>{dogadjaj.pocetak}</td>
                   <td>{dogadjaj.kraj}</td>
                   <td>{dogadjaj.besplatan}</td>
                   <td>{dogadjaj.brojPrijava}</td>
                   <td><button name="prijavi-se" id="prijavi-se">Prijavi se</button></td>
               </tr>
           ))}
       </tbody>
   </table>
  </>);
}
export default TabelaDogadjaja;
