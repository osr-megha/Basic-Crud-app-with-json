import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../Service/api';
import{Table, TableBody, TableCell, TableRow, TableHead, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    table: {
      width:"90%",
      margin:"50px 0 0 50px",
      fontSize:"20"
    },
    thead:{
        '& > *' : {
        background:"#ADD8E6",
        fontSize:20,
        fontStyle:"bold"
            }
    },
    row:{
        '& > *' : {
            fontSize: 15,
        }
    }
  });

const AllUser = () => {

    const [user, setUser] = useState([]);

    const classes = useStyle();

    useEffect(() => {
        getAllUser();
    },[])

    const getAllUser = async() => {
        const response = await getUsers();
        console.log(response.data);
        setUser(response.data);

    }

    const deleteUserdata = async (id) => {
      await deleteUser(id);
      getAllUser();
    }



    return (
        <React.Fragment>

        <Table className={classes.table} aria-label="simple table">
        <TableHead>
        <TableBody>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
          </TableBody>
          <TableBody>
          {user.map(user => (
            <TableRow className={classes.row}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              
              <TableCell>
                <Button variant="contained" color="primary" style={{marginRight:10}} component = {Link} to={`edit/${user.id}`}>Edit</Button>
             
                <Button variant="contained" color="secondary" onClick={()=>deleteUserdata(user.id)}>Delete</Button>

              </TableCell>
            </TableRow>
          ))
        }
          </TableBody>
        </TableHead>
      </Table>
            
        </React.Fragment>
    )
}

export default AllUser;
