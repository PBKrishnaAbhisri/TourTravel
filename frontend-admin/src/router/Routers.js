import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminDashboard from '../AdminDashboard/AdminDashboard'
import AdminLogin from '../AdminDashboard/components/AdminLogin'
import ProtectedRoute from '../components/ProtectedRoute'


const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/admin/login'/>} />
         <Route path='/admin/login' element={<AdminLogin/>} />
         <Route 
            path='/admin/dashboard' 
            element={
               <ProtectedRoute>
                  <AdminDashboard/>
               </ProtectedRoute>
            } 
         />
         <Route path='/admin' element={<Navigate to="/admin/login" />} />
         <Route path='*' element={<Navigate to="/admin/login" />} />
      </Routes>
   )
}

export default Routers