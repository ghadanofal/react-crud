import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Details() {

    let [user, setUser] = useState({})

    const {id} = useParams('id')

    const getUser = async()=>{
        const {data} = await axios.get(`https://crud-users-gold.vercel.app/users/${id}`)
        console.log(data)
        setUser(data.user)
    }

useEffect(()=>{
    getUser()
},[])
    return (
    <>
    <div className="container-fluid">
        {console.log("test")}
<div className="row flex-nowrap">
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-5 d-none d-sm-inline">Menu</span>
        </a>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        <li className="nav-item">
            <a href="#" className="nav-link align-middle px-0">
            <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Home</span>
            </a>
        </li>
        <li>
            <Link to="/users/index" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">index</span></Link>
        </li>
        <li>
            <Link to="/users/create" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-grid" /> <span className="ms-1 d-none d-sm-inline">create</span> </Link>
            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
            <li className="w-100">
                <Link to="/" className="nav-link px-0"> Users </Link>
            </li>
            <li>
                <Link to="/users/index" className="nav-link px-0"> index</Link>
            </li>
            <li>
                <Link to="/users/create" className="nav-link px-0">create</Link>
            </li>
            
            </ul>
        </li>
        
        </ul>
        <hr />
        
    </div>
    </div>
    <div className="col py-3">
        details of {user.name}
    </div>
</div>
</div></>
    )
}
