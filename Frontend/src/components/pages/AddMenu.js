
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

  export default function Menu(){
    const paperStyle = {padding : '20px 20px', width:300, margin: "20px auto"}
    const[name,setName] = useState('')
    const[cost,setCost] = useState('')
    const[type,setType] = useState('')
    const[menu,setMenu]=useState([])
    const classes = useStyles();

    const handleClick=(e)=>{
        e.preventDefault()
        const dishMenu={name,cost,type}
        fetch("http://localhost:8080/Menu/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(dishMenu)
    
      }).then(()=>{
        console.log("New Student added")
      })
      Swal.fire({
        position: "bottom-center",
        icon: "success",
        title: "Item added successfully",
        showConfirmButton: true,
        timer: 3000
      });



    }


    useEffect(()=>{
        fetch("http://localhost:8080/Menu/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setMenu(result);
    }
    )
    })

  return (

   
<Container>
    <Paper elevation = {3} style = {paperStyle}>
    <h3>Add Dish</h3>
            <form className={classes.root} noValidate autoComplete="off">
                    <TextField id = "standard-basic" label = "name"   variant="standard"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                    <TextField id = "standard-basic" label = "cost"   variant="standard"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    />
                    <TextField id = "standard-basic" label = "type"   variant="standard"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={handleClick}>
                    Add Item
                    </Button>
            </form>
    </Paper>

     <h1>Menu</h1>

     <Paper elevation={3} style={paperStyle}>

       {menu.map(dishMenu=>(
         <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={dishMenu.dishId}>
          DishId:{dishMenu.dishId}<br/>
          Name:{dishMenu.name}<br/>
          Cost:{dishMenu.cost}
         </Paper>
       ))
     }


     </Paper>

</Container>
  
  );
}