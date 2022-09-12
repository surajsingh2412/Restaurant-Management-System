import React from "react";
import { mains } from "../../menu";

//function Additem (){

  

        // Requiring fs module
        const fs = require("fs");
        
        // Storing the JSON format data in myObject
        var data = fs.readFileSync("../../menu.json");

        var myObject = JSON.parse(data);
        
        // Defining new data to be added
        let newData = {
        country: "England",
        };
        
        // Adding the new data to our object
        myObject.push(newData);
        
        // Writing to our JSON file
        var newData2 = JSON.stringify(myObject);
        fs.writeFile("data2.json", newData2, (err) => {
        // Error checking
        if (err) throw err;
        console.log("New data added");
        });
        
//}

//css file-> stylesheet folder
//component folder
//doc folder

import React, { Component } from 'react';
import MenuService from '../services/MenuService';

class AddMenuComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            Name: '',
            Cost: 0,
            Type: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCostHandler = this.changeCostHandler.bind(this);
        this.saveMenu = this.saveMenu.bind(this);
    }
   
    saveMenu = (e) => {
        e.preventDefault();
        let menu = {name: this.state.Name, cost: this.state.Cost, type: this.state.Type};
        console.log('menu => ' + JSON.stringify(menu));
        MenuService.saveMenuH2(menu).then(res =>  {
            this.props.history.push('/Menu');
        });
        mains.add([...mains, menu]);
    }
    changeNameHandler= (event) => {
        this.setState({Name: event.target.value});
    }
    changeCostHandler= (event) => {
        this.setState({Cost: event.target.value});
    }
    changeTypeHandler= (event) => {
        this.setState({Type: event.target.value});
    }
    cancel(){
        this.props.history.push('/Menu');
    }

    render() {
        return (
            <div className="container">
                <div className= "row">
                    <div className="card col-md-6 offset-md-3 offser-md-3">
                        <h3 className="text-center">Add Menu</h3>
                            <div className="card-body">
                               <form>
                                   <div className="form-group">
                                       <label>Name :</label>
                                       <input placeholder="Name" name = "Name" className="form-control"
                                            value={this.state.Name} onChange={this.changeNameHandler}/>
                                   </div>
                                   <div className="form-group">
                                       <label>Cost :</label>
                                       <input placeholder="Cost" name = "Cost" className="form-control"
                                            value={this.state.Cost} onChange={this.changeCostHandler}/>
                                   </div>
                                   <div className="form-group">
                                       <label>Type :</label>
                                       <input placeholder="Type" name = "Type" className="form-control"
                                            value={this.state.Type} onChange={this.changeTypeHandler}/>
                                   </div>


                                   <button className="btn btn-success" onClick={this.saveMenu}>Save</button>
                                   <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                               </form>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddMenuComponent;