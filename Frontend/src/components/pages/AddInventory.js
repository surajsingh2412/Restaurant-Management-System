
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import Swal from 'sweetalert2';
  
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        
      },
    },
  }));

  export default function Inventory(){
    const paperStyle = {padding : '20px 20px', width:230, margin: "20px auto"}
    const[ingredientId,setingredientId] = useState('')
    const[item,setitem] = useState('')
    const[units,setunits] = useState('')
    const[Inventory,setInventory]=useState([])
    const classes = useStyles();

    const handleClick=(e)=>{
        e.preventDefault()
        const dishInventory={ingredientId,item,units}
        fetch("http://localhost:8080/Inventory/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(dishInventory)
    
      }).then(()=>{
        
      })

      Swal.fire({
        position: "bottom-center",
        icon: "success",
        title: "Inventory item added successfully",
        showConfirmButton: true,
        timer: 3000
      });


    }


    useEffect(()=>{
        fetch("http://localhost:8080/Inventory/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setInventory(result);
    }
    )
    })

    

  return (

   
<Container>
    <Paper elevation = {3} style = {paperStyle}>
        <h3>Add Inventory Item</h3>
            <form className={classes.root} noValidate autoComplete="off">
                   
                    <TextField id = "standard-basic" label = "item"   variant="standard"
                    value={item}
                    onChange={(e) => setitem(e.target.value)}
                    />
                    <TextField id = "standard-basic" label = "units"   variant="standard"
                    value={units}
                    onChange={(e) => setunits(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={handleClick}>
                    Add Item
                    </Button>
            </form>
    </Paper>

     <h1>Inventory</h1>

     <Paper elevation={3} style={paperStyle}>

       {Inventory.map(dishInventory=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={dishInventory.ingredientId}>
          Item:{dishInventory.item}<br/>
          Units:{dishInventory.units}
          
         </Paper>
       ))
     }


     </Paper>

</Container>
  
  );
}
