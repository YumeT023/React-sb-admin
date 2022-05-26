import React from "react";
import { NavLink } from "./NavLink";
import { NestedNav } from "./NestedNav";

export const SideBarMenu = () => {
    return (
        <div className="sb-sidenav-menu">
            <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <NavLink linkIcon="fas fa-tachometer-alt" href="index.html" isCollapsed={false}>
                    Dashboard
                </NavLink>

                <div className="sb-sidenav-menu-heading">Interface</div>
                <NavLink target="#collapseLayouts" controls="collapseLayouts" linkIcon="fas fa-columns">
                    Layouts
                </NavLink>

                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <NestedNav
                        data={[{ href: "layout-static.html", label: "Static Navigation" },
                        { href: "layout-sidenav-light.html", label: "Light Sidenav" }
                        ]}
                    />
                </div>

                <NavLink target="#collapsePages" controls="collapsePages" linkIcon="fas fa-book-open">
                    Pages
                </NavLink>

                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">

                        <NavLink target="#pagesCollapseAuth" controls="pagesCollapseAuth" hasIcon={false} >
                            Error
                        </NavLink>

                        <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                            <NestedNav
                                data={[{ href: "login.html", label: "Login" },
                                { href: "register.html", label: "Register" },
                                { href: "password.html", label: "Forgot Password" }
                                ]}
                            />
                        </div>

                        <NavLink target="#pagesCollapseError" controls="pagesCollapseError" hasIcon={false} >
                            Error
                        </NavLink>

                        <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                            <NestedNav
                                data={[{ href: "401.html", label: "401 Page" },
                                { href: "404.html", label: "404 Page" },
                                { href: "500.html", label: "500 Page" }
                                ]}
                            />
                        </div>
                    </nav>
                </div>
                <div className="sb-sidenav-menu-heading">Addons</div>

                <NavLink isCollapsed={false} linkIcon="fas fa-chart-area" href="charts.html" >
                    Charts
                </NavLink>

                <NavLink isCollapsed={false} linkIcon="fas fa-table" href="tables.html" >
                    Tables
                </NavLink>

            </div>
        </div>
    )
}