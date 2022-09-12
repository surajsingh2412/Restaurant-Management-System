

import React, { useState, useEffect } from "react";

import "../../components/pages/tabledata.css";



function NewRecipe() {

  const [data, getData] = useState([]);

  const URL ="http://localhost:8080/Recipe/getAll";



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
    fetch(`http://localhost:8080/Recipe/delete/${ingredientId}`,
    {
      method:`DELETE`
    }).then((response )=>{
        
          fetchData() 
        
    })

    }




  return (

    <>

    

    




      <table className="TT">

        <tr>

          <th>Ingredient Id</th>

          <th>Dish Id</th>

          <th>Item</th>

          <th>Dish Unit</th>

          <th>Delete </th>

        </tr>

        {data.map((item, i) => (

          <tr key={i}>

            <td>{item.ingredientId}</td>

            <td>{item.dishId}</td>

            <td>{item.item}</td>

            <td>{item.dishUnit}</td>

            <td> <button onClick={()=>deleteitem(item.ingredientId)}><i class="fa fa-trash" aria-hidden="true"></i></button> </td>

          </tr>

        ))}

      </table>
	  <div className='ADDBUTTON'>
		<a href="/AddRecipe" className="Add2">
        <button type="submit" className="btn btn--primary btn--medium">ADD RECIPE ITEM</button>
         </a>
  
 		</div>

    </>

  );

}



export default NewRecipe;
