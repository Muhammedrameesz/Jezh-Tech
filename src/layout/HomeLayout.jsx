import { Outlet } from "react-router-dom"
import HomeNav from "../navBar/HomeNav"

export default function HomeLayout() {
  return (
    <>
    <HomeNav/>
    <Outlet/>
    </>
  )
}
