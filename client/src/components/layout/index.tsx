import { Outlet } from "react-router-dom";
import { Header } from "../header";

export function Layout() {
    return (
        <div className="w-full h-screen bg-black">
            <Header />
            <Outlet />
        </div>
    )
}