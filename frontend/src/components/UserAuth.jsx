import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const UserAuth = ({children}) => {

    const [currentUser, setcurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('subscriber'))
    )

    if(currentUser !== null){
        return children;
    }else{
        Swal.fire({
            icon : 'error',
            title : 'Not Allowed',
            text : 'Login First to access this page'
        });
    
         return <Navigate to='/Login' />
    
    }
}

export default UserAuth;