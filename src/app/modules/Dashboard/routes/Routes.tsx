import { Routes, Route } from 'react-router-dom'

import { Customers } from '../pages/Customers'

export function DashboardRoutes() {
  return (
    <Routes>
      <Route index element={<Customers />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  )
}
