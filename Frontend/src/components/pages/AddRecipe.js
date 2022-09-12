
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

  export default function NewRecipe(){
    const paperStyle = {padding : '20px 20px', width:300, margin: "20px auto"}
    const[ingredientId,setingredientId] = useState('')
    const[dishId,setdishId] = useState('')
    const[item,setitem] = useState('')
    const[dishUnit,setdishUnit] = useState('')
    const[NewRecipe,setNewRecipe]=useState([])
    const classes = useStyles();

    const handleClick=(e)=>{
        e.preventDefault()
        const dishRecipe={ingredientId,dishId,item,dishUnit}
        fetch("http://localhost:8080/Recipe/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(dishRecipe)
    
      }).then(()=>{
       
      })
      Swal.fire({
        position: "bottom-center",
        icon: "success",
        title: "Recipe Item added successfully",
        showConfirmButton: true,
        timer: 3000
      });


    }


    useEffect(()=>{
        fetch("http://localhost:8080/Recipe/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setNewRecipe(result);
    }
    )
    })

  return (
      

   
<Container>
    <Paper elevation = {3} style = {paperStyle}>
    <h3>Add Recipe item</h3>
            <form className={classes.root} noValidate autoComplete="off">
                    
                    <TextField id = "standard-basic" label = "dishId"   variant="standard"
                    value={dishId}
                    onChange={(e) => setdishId(e.target.value)}
                    />
                    <TextField id = "standard-basic" label = "item"   variant="standard"
                    value={item}
                    onChange={(e) => setitem(e.target.value)}
                    />
                     <TextField id = "standard-basic" label = "dishUnit"   variant="standard"
                    value={dishUnit}
                    onChange={(e) => setdishUnit(e.target.value)}
                    />
                    <Button classname="btn btn--primary btn--medium" variant="contained" color="primary" onClick={handleClick}>
                    Add Item
                    </Button>
            </form>
    </Paper>

     <h1>Recipe</h1>

     <Paper elevation={3} style={paperStyle}>

       {NewRecipe.map(dishRecipe=>(
         <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={dishRecipe.ingredientId}>
          DishId:{dishRecipe.dishId}<br/>
          Item:{dishRecipe.item}<br/>
          DishUnit:{dishRecipe.dishUnit}
         </Paper>
       ))
     }


     </Paper>

</Container>
  
  );
}