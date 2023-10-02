import React, { useState } from 'react'

const Plugin = () => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const getPluginCode = () => {
        return `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
<div id="plugin" owner-id="${currentUser._id}"></div>
<script src="http://localhost:5000/index.js"></script>`
    }
  return (
    <div>

   

        <textarea className='form-control' value={getPluginCode()} rows={5}>
        </textarea>
    </div>
  )
}

export default Plugin;