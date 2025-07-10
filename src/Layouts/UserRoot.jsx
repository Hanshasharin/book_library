import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const UserRoot = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default UserRoot
