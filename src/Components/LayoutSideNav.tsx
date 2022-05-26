import React from "react";
import { Footer } from "./Footer";
import { MainBody } from "./MainBody";
import { SideNav } from "./SideNav";

export const LayoutSideNav = () => {
    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <SideNav />
                <MainBody />
                <Footer />
            </div>
        </div>
    )
}