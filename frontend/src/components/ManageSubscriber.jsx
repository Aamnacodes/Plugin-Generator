import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageSubscriber = () => {
    
    const [userList, setUserList] = useState([]);
    const [currentUser, setCurrentUser] = useState(
      JSON.parse(sessionStorage.getItem('user'))
    )

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/subscriber/getbyowner/'+currentUser?._id);
    console.log(res.status);

    const data = await res.json();
    console.log('data:', data);
    setUserList(data);
  }

  const countSubscribers = () => {
    return userList.length;
  }
  
  const deleteUser = async (id) => {
    const res = await fetch('http://localhost:5000/subscriber/delete/'+id, { method : 'DELETE', headers: { 'Content-Type': 'application/json'} });
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    if(res.status === 200){
      setUserList(userList.filter(user => user._id !== id));
      console.log(userList);
      if (data){
      toast.success(data.name +' Deleted Successfully ❗')
      }
      fetchUserData();
    
    }
    }
  

  useEffect(() => {
    fetchUserData();
  }, []); 

  const displayUserData = () => {
    return (
      <div>
        <h2>Total Subscribers: {countSubscribers()}</h2>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              userList.length > 0 ?
              (userList?.map( (user) => ( <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                
                {/* <td>
                  <Link to={'/updateuser/'+user._id} className='btn btn-primary'>Edit</Link>
                </td> */}
                <td>
                  <button onClick={ () => { deleteUser(user._id) } } className='btn btn-danger'>Delete</button>
                </td>
              </tr> ) )) : ''
            }
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className='top'>
      <h1 className='text-center fw-bold'>Manage User Data</h1>
      <hr />

      <div className='container'>
        {displayUserData()}
      </div>
    </div>
  );
  }
export default ManageSubscriber;
