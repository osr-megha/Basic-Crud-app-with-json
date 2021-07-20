import React from 'react'
import { makeStyles, FormControl, FormGroup, InputLabel, Input,Button } from '@material-ui/core';
import { useState } from 'react';
import { addUser } from '../Service/api';
import {useHistory} from 'react-router-dom'

const useStyle = makeStyles({
    container:{
        width:'50%',
        margin:'5% 0 0 25%',
        '& > *': {
            marginTop:20
        }

    }
});

const initialVal = {
    name:'',
    username:'',
    email:'',
    phone:''
}

const AddUser = () => {

    const [user, setUser] = useState(initialVal);

    const {name, username,email,phone} = user;

    const classes = useStyle();

    const history =useHistory();


    const onValueChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        history.push('./all');
    }



    return (
        <React.Fragment>
        <FormGroup className={classes.container}>
        <h2>Add User</h2>
        <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange = {(e)=> onValueChange(e)} name="name" value={name} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange = {(e)=> onValueChange(e)} name="username" value={username}/>
      </FormControl>
      <FormControl> 
        <InputLabel>Email</InputLabel>
        <Input onChange = {(e)=> onValueChange(e)} name="email" value={email}/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange = {(e)=> onValueChange(e)} name="phone" value={phone}/>
      </FormControl>
      <Button variant="contained" color="primary" onClick={()=> addUserDetails()}>Add User</Button>
      </FormGroup>
        
        </React.Fragment>
    )
}

export default AddUser
