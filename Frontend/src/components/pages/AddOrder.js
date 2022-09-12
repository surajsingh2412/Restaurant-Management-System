
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

  export default function NewOrder(){
    const paperStyle = {padding : '20px 20px', width:250, margin: "20px auto"}
    const[orderId,setOrderId] = useState('')
    const[tableNo,setTableNo] = useState('')
    const[dishId,setdishId] = useState('')
    const[specialRequest,setspecialRequest] = useState('')
    const[status,setStatus] = useState('initiated')
    const[NewOrder,setNewOrder]=useState([])
    const classes = useStyles();

    const handleClick=(e)=>{
        e.preventDefault()
        const dishOrder={orderId,tableNo,dishId,status,specialRequest}
        fetch("http://localhost:8080/Order/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(dishOrder)
    
      }).then(()=>{
        
      })

      Swal.fire({
        position: "bottom-center",
        icon: "success",
        title: "Order Placed",
        showConfirmButton: true,
        timer: 3000
      });


    }


    useEffect(()=>{
        fetch("http://localhost:8080/Order/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setNewOrder(result);
    }
    )
    })

  return (
      

   
<Container>
    <Paper elevation = {3} style = {paperStyle}>
        <h3>Place Order</h3>
            <form className={classes.root} noValidate autoComplete="off">
                    
                    <TextField id = "standard-basic" label = "tableNo"   variant="standard"
                    value={tableNo}
                    onChange={(e) => setTableNo(e.target.value)}
                    />
                    <TextField id = "standard-basic" label = "dishId"   variant="standard"
                    value={dishId}
                    onChange={(e) => setdishId(e.target.value)}
                    />
                     <TextField id = "standard-basic" label = "specialRequest"   variant="standard"
                    value={specialRequest}
                    onChange={(e) => setspecialRequest(e.target.value)}
                    />
                    <Button classname="btn btn--primary btn--medium" variant="contained" color='primary' onClick={handleClick}>
                    Place
                    </Button>
<a href="/Orders">
<Button classname="btn btn--primary btn--medium" variant="contained" color="primary">
                    View Order </Button>
</a>
                    

                    

            </form>
    </Paper>

</Container>
  
  );
}