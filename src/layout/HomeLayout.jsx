import { Outlet } from "react-router-dom"
import HomeNav from "../navBar/HomeNav"
import ScrollToTop from "../components/ScrollToTop"

export default function HomeLayout() {
  return (
    <>
    <ScrollToTop/>
    <HomeNav/>
    <Outlet/>
    </>
  )
}
