import React, { useState } from 'react';
import { NavBar } from './Components/NavBar';
import './App.css';
import { LayoutSideNav } from './Components/LayoutSideNav';

export const App = () => {

	const [isSideBarToggled, ToggleSideBarStatus] = useState(false);

	const handleSideBarToggle = () => {
		ToggleSideBarStatus(!isSideBarToggled);
	}

	return (
		<div className={'sb-nav-fixed ' + (isSideBarToggled ? 'sb-sidenav-toggled' : null)}>
			<NavBar onSideBarToggle={handleSideBarToggle} />
			<LayoutSideNav />
		</div>
	);
}