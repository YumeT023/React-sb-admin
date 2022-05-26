import React from "react";
import { NavLinkCollapsedType } from "./Tools/Types";

export const NavLink = (props: NavLinkCollapsedType) => {
    let {
        target, 
        controls, 
        linkIcon, 
        children,  
        collapsedArrow = "fas fa-angle-down", 
        hasIcon = true, 
        extraClass = "collapsed",
        href = "#",
        isCollapsed = true
    } = props;
    // some props have default value
    return (
        <a className={`nav-link ${extraClass}`} href={href} data-bs-toggle="collapse" data-bs-target={target} aria-expanded="false" aria-controls={controls}>
            {hasIcon && <div className="sb-nav-link-icon"><i className={linkIcon}></i></div>}
                {children}
            {isCollapsed && <div className="sb-sidenav-collapse-arrow"><i className={collapsedArrow}></i></div>}
        </a>
    )
}