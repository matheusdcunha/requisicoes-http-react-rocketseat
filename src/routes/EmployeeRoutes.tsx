import { Route, Routes } from "react-router";

import { Refund } from "../pages/Refund";
import { AppLayout } from "../components/AppLayout";
import { NotFound } from "../pages/NotFound";
import { Confirm } from "../pages/Confirm";

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refund />} />
        <Route path="/confirm" element={<Confirm/>}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}