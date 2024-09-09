import { Component } from "react";
import UserCard from "./UserCard";
import './UserList.css';
class UserList extends Component {
    state = {
        userList : []
    }   
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((res)) => {
    //             console.log(res);
    //             return res.json;
    //         }
    //         .then((data) => {
    //             console.log(data);
    //             this.setState({userList : data})
    //         })
    //     }

        componentDidMount(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{
            console.log(res.status)
            return res.json();
            })
            .then((data)=>{
            console.log(data)
            this.setState({userList: data})
    })
  }
  componentWillUnmount() {
    this.setState({userList :[]})
  }
    render() {
        const {userList} = this.state;
        console.log(userList);
        return (
            <>
            <UserCard userData ={ userList }/>
            </>
                
        )
    };
    
}
export default UserList;