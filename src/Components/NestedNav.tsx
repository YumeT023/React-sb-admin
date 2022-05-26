import React from "react";
import { Nav } from "./Tools/Types";

export const NestedNav = (props: { data : Nav[]}) => {
    return (
        <nav className="sb-sidenav-menu-nested nav">
            {props.data.map((nav, index) => (
                <a className="nav-link" href={nav.href} key={index} >{nav.label}</a>
            ))}
        </nav>
    )
}