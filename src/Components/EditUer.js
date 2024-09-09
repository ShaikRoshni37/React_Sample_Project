
import { json, Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const EditUser = (props) => {
   const {id} = useParams();
   const[ userData, setUserDate] = useState('');
   const[name,setName] = useState('');
   const[email, setEmail] = useState('');

   const[newUserData ,setNewUserData] = useState({
    id : '',
    name : '',
    email : ''
   })
   const handleName = (e) => {
    setName(e.target.value);
    setNewUserData({
        ...newUserData,
        name : e.target.value
    })
   }
   const handleEmail = (e) => {
    setEmail(e.target.value);
    setNewUserData({
        ...newUserData,
        email : e.target.value
    })
 }   
    const handleSave = () => {
        console.log("Save Clicked");
        console.log("NUD" ,newUserData);
        const options = {
            method : "PUT",
            headers : {"content-type":"application/json"},
            body : JSON.stringify(newUserData)
        }
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,options)
        .then((res) => {
            console.log(res.status);
            return res.json;
        })
        .then((data) => {
            console.log(data);
        })
    }
    const handleDelete = () => {
        console.log("Delete Clicked");
        console.log("NUD",newUserData);
        const options = {
            method : 'DELETE',
            headers : {"content-type" :"application/json"},
            body : JSON.stringify(newUserData)
        }
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,options)
        .then((res) => {
            console.log(res.status);
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })
    }
 useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                console.log(res.status);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setUserDate(data);
                setNewUserData({
                    ...newUserData,
                    id : data.id,
                    name : data.name,
                    email : data.email
                }

                )
            })
   },[])
    console.log(id);
    return(
        <div class = "table-container">
            <div class="top-cpntainer">
                <h1>Edit User : </h1>
            </div>
            <table>
                <tr>
                    <th>ID :</th>
                    <td><input type="text" value={userData.id} disabled={true} /></td>
                </tr>
                <tr>
                    <th>Name : </th>
                    <td><input type="text" defaultValue={userData.name} onChange={handleName}/></td>
                </tr>
                <tr>
                    <th>Email : </th>
                    <td><input type="text" defaultValue={userData.email} onChange={handleEmail}/></td>
                </tr>
            </table>
            <div class="bottom-container">
                <Link to="/"><button class = "back-button">Back</button></Link>
                <button class="save-button" onClick={handleSave}>Save</button>
                <button childrenlass="delete-button" onClick={handleDelete}>Delete</button>
                <Link to="/users/add"><button class="add-button">Add User</button></Link>
            </div>
        </div>
    )
}
export default EditUser;