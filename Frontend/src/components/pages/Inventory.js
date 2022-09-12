
import React, { useState, useEffect } from "react";
import "../../components/pages/inventoryTable.css";

function Inventory() {
  const [ingredientId,setIngredientId] = useState();
  const [data, getData] = useState([]);
  const [units, setUnits] = useState();
  const [item, setItem] = useState();
  const URL ="http://localhost:8080/Inventory/getAll";
  


  useEffect(() => {
    fetchData();
  });

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        getData(response);

      });
  };

  const deleteitem =(ingredientId)=>{
    fetch(`http://localhost:8080/Inventory/delete/${ingredientId}`,
    {
      method:`DELETE`
    }).then((response )=>{
        /* //response.json().filter(ingredientId=>(response.ingredientId==ingredientId)).then(()=>
        {
          console.log(response) */
          fetchData() 
        
    })

    }

    const updateUser =()=>{
      // let item={status}
      console.warn(`http://localhost:8080/Inventory/update/${ingredientId}`);
      const obj = {units : `${units}`};
      fetch(`http://localhost:8080/Inventory/update/${ingredientId}`, {
         method: 'PUT',
         headers:{
            'Accept':'application/json',
           'Content-Type':'application/json'
         },
         body:JSON.stringify(obj)
       })
    }



  return (
    <>
    
     
          
      <h2>Inventory Items</h2>
      <table className="inventory">
        <tr>
          <th>IngredientId</th>
          <th>Items</th>
          <th>Units</th>
          <th>Delete</th>
          <th>Update units</th>
          
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            
            <td>{item.ingredientId}</td>
           
           <td>{item.item}</td>
        
            <td>{item.units}</td>
            <td> <button onClick={()=>deleteitem(item.ingredientId)}><i class="fa fa-trash" aria-hidden="true"></i></button> </td>
            <td> <button onClick={()=>{setItem(item);setUnits(item.units);setIngredientId(item.ingredientId)}}><i class="fas fa-edit"></i>

</button> </td>
          </tr>
        ))}
      </table>
     

              <div
                className="combined">
                <div className='ADDBUTTON'>
        
        <a href="/AddInventory" className="Add1">
            <button type="submit" className="btn btn--primary btn--medium">ADD INVENTORY ITEM</button>
             </a>
      
         </div>
    
         <div className="update1"> 
          <input className="in" placeholder="ingredientId" type="text" value={ingredientId}/> <br /><br />
            <input className="in" placeholder="units" type="text" value={units}  onChange={(e)=>{setUnits(e.target.value)}} /> <br /><br />
            <button className="btn btn--primary btn--medium" onClick={updateUser}>Change units</button>  
          </div>
                
              </div>


    </>
  );
}

 export default Inventory;
