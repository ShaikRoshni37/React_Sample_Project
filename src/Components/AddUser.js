import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AddUser = () => {
    const[id, setId] = useState('');
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');

    const handleId = (e) => {
            setId(e.target.value);
    }
    const handleName = (e) => {
            setName(e.target.value);
    }
    const handleEmail = (e) => {
            setEmail(e.target.value);
    }
    const handleAdd = (e) => {
        const newUserData = {
            id : id,
            name : name,
            email : email
        }
        console.log("add button clicked");
        const options = {
            method : "POST",
            headers : {"content-type" : "application/json"},
            body : JSON.stringify(newUserData)
        }
        fetch(`https://jsonplaceholder.typicode.com/users/`,options) 
        .then((res) => {
            console.log(res.status);
            console.log(res);
            return res.json();
        })
        .then((data) =>{
            console.log(data);

        })

    }
    return(
        <div class="table-container">
            <div class="top=container">
                <h1>Add User </h1>
            </div>
            <table>
                <tr>
                    <th>ID : </th>
                    <td><input type="text" onChange={handleId} /></td>
                </tr>
                <tr>
                    <th>Name : </th>
                    <td><input type="text" onChange={handleName} /></td>
                </tr>
                <tr>
                    <th>Email : </th>
                    <tr><input type="email" onChange={handleEmail}/></tr>
                </tr>
            </table>
            <div class="bottom-container">
                <Link to='/'><button class="back-button">Back</button></Link>
                <button class="add-button" onClick={handleAdd}>Add User</button>
            </div>

        </div>
    )
}
export default AddUser;