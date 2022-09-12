import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

  
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        
      },
    },
  }));

  export default function ViewBill(){
    const paperStyle = {padding : '20px 20px', width:230, margin: "20px auto"}
    const[ingredientId,setingredientId] = useState('')
    const[tableNo,setTableNo] = useState(0)
    //const[units,setunits] = useState('')
    const [totalCost,setTotalCost] = useState("");
    const[data,getData]=useState([])
    const classes = useStyles();

    
    const fetchData = () => {

      fetch(`http://localhost:8080/Bill/getTotal/${tableNo}`,{

          method:"PUT",
          headers:{"Content-Type":"application/json"},
      })
  
        .then((res) => res.json())
        .then((response) => {
          //console.log(response);
          //getData(response);
          setTotalCost(response.totalCost);
        });
  
    };
  

  return (

   
<Container>
    <Paper elevation = {3} style = {paperStyle}>
        <h3>Enter Table No</h3>
            <form className={classes.root} noValidate autoComplete="off">
                   
                    <TextField id = "standard-basic" label = "tableNo"   variant="standard"
                    value={tableNo}
                    onChange={(e) => setTableNo(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={fetchData}>
                    Show Bill
                    </Button>
            </form>
    </Paper>


    <Paper elevation={3} style={paperStyle}>
    <h4>Bill</h4>
     <br/>Table No : {tableNo}
     <br/>Total Cost : {totalCost}
          
          
         </Paper> 


</Container>
  
  );
}
