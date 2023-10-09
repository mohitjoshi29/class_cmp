import React, { Component } from 'react';

const arr1=[11,22,33,44,"string","mohit"];

export default class Class_cmp extends Component {
    constructor(props){
        super(props);
        this.parentfun=this.parentfun.bind(this);
        this.eventhand=this.eventhand.bind(this);
        this.state={
                value:"we are using states inside the constructor method using this keyword",
                abc:"xyz",
                arr:[11,22,33,44,55],
                login:false
            }
        }
        newState=()=>{this.setState({value:"we can update the state dynamically",arr:[3423,6456,567678,4575675,566786],val:"jfkdfifuhidfu"})}
        parentfun(data){
            alert(data);
        }
        eventhand(val){
            alert(val);
        }
        render() {
            const {value,abc,arr,login}=this.state;
            // for(var i=0;i<arr1.length;i++){
        const ar2=[];
        for(var item of arr1){
            ar2.push(<li>{item}</li>);
        //  ar2.push(<li key={i.toString()}>{arr1[i]}</li>)
    }
    // switch(login){
    //     case true:
    //         return <button onClick={logoutt}>logout</button>;
    //         break;
    //     case false:
    //         return <button onClick={loginn}>login</button>;
    //         break;
    //     default:
    //         return null;
    // }
    // function logoutt(){
    //     alert("you need to logout");
    // }
    // function loginn(){
    //     alert("you need to login");
    // }
    return (
      <div>
        <h1>implement Class Component...</h1>
        <h2>I create a project, inside this project create class Component...,and implementing that Component</h2>
        <button onClick={()=>this.parentfun(this.props.name)}>Alert</button>
        <button onClick={()=>this.eventhand(this.props.assign)}>success</button>
        <br></br>
        <button onClick={()=>this.props.fun("mhow")}>asadas</button>
        <button onClick={()=>this.props.fun1("Subhash chandra boss")}>second</button>

        <h3>state method:" {value} " and " {abc} "</h3>
        <p>state 1st key: {this.state.value} and state 2nd key: {this.state.abc}</p>
        <p>state: {arr.join(",")}</p>
        <br/>
        <button onClick={this.newState}>Change state</button>
        {/* <ul>{ar2}</ul> */}

        {this.props.name}
        {ar2}
        {/* {this.parentfun("mohit")} */}
        {/* <conditionalswitch login={login}/> */}
        

        <h1>{"hello i am switch case..."}</h1>
      </div>
    )
}
}
