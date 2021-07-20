import React from 'react'
import { makeStyles, FormControl, FormGroup, InputLabel, Input,Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
//import { addUser } from '../Service/api';
import {useHistory, useParams} from 'react-router-dom'
import { getUsers, editUser } from '../Service/api';

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

const EditUser = () => {

    const [user, setUser] = useState(initialVal);

    const {name, username,email,phone} = user;

    const {id} = useParams();

    const classes = useStyle();

    const history =useHistory();

    useEffect(() => {
        loadUserData();
        //alert("i am alert");
    },[]);

    const loadUserData = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    };

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    };

    const editUserDetails = async() => {
        await editUser(id, user);
        history.push('/all');
        console.log("i m called");
    }

    return (
        <React.Fragment>
        <FormGroup className={classes.container}>
        <h2> Edit User</h2>
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
      <Button variant="contained" color="primary" onClick={()=> editUserDetails() }>Edit User</Button>
      </FormGroup>
        
        </React.Fragment>
    )
}

export default EditUser;
