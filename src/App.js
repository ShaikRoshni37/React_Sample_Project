import Home from './Components/Home';
import NotFound from './Components/NotFound';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserCard from './Components/UserCard';
import EditUser from './Components/EditUer';
import UserList from './Components/UserList';
import AddUser from './Components/AddUser';

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* <Route path="/" element = {<Home />} /> */}
      
        <Route path="/" element = {<UserList />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/users/:id" element={<EditUser />} />
        <Route path="/users/add" element={<AddUser/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
