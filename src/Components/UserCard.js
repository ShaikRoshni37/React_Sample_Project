import { Link } from "react-router-dom";

import './UserCard.css';
const UserCard = (props) => {
    console.log(props.userData)
    const {userList} = props.userData;
    console.log(userList);

    return (
        <div class="table-container"> 
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                {props.userData.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <Link to={`/users/${user.id}`} >
                    <td><button class = "viewButton" type="button">View</button></td>
                    </Link>
                </tr>
                ))}
            </table>
        </div>
    )

}
export default UserCard;