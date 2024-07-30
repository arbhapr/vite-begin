import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

const RootLayout = () => {
    return (
        <>
            <NavLink
                className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                }
                to={"/"}
            >
                Home
            </NavLink>{" "}
            |{" "}
            <NavLink className="" to={"/blog"}>
                Blog
            </NavLink>{" "}
            |{" "}
            <NavLink className="" to={"/about"}>
                About
            </NavLink>
            <p />
            <Outlet />
        </>
    );
};

export default RootLayout;
