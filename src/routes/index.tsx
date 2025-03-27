import { useAuth } from "../hooks/useAuth";
import { BrowserRouter } from "react-router-dom";

import { Loading } from "../components/Loading";


import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";


export function Routes() {
  const { session, isLoading } = useAuth()

console.log(session)

  function Route() {
    switch (session?.user.role) {
      case "employee":
        return <EmployeeRoutes />
      case "manager":
        return <ManagerRoutes />
      default:
        return <AuthRoutes />
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <BrowserRouter>
      {Route()}
    </BrowserRouter>
  )
}