import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../container/Home'
import AdminAccount from '../container/AdminAccount'
import Login from "../container/Login"
import Overview from '../container/OverView'

function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminAccount" element={<AdminAccount />} />
          
        </Routes>
      </BrowserRouter>
    );
}

export default Router;