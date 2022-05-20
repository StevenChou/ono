// import node module libraries
import React, { useState, useEffect } from 'react';

// import sub components
import NavbarVertical from './NavbarVertical';
import HeaderDefault from './HeaderDefault';

const DashboardIndex = (props) => {
	const [showMenu, setShowMenu] = useState(true);
	const ToggleMenu = () => {
		return setShowMenu(!showMenu);
	};
	useEffect(() => {
		document.body.style.backgroundColor = '#f5f4f8';
	});
	return (
		<div id="db-wrapper" className={`${showMenu ? '' : 'toggled'}`}>
			<div className="navbar-vertical navbar">
				<NavbarVertical
					showMenu={showMenu}
					onClick={(value) => setShowMenu(value)}
				/>
			</div>
			<div id="page-content">
				<div className="header">
					<HeaderDefault
						data={{
							showMenu: showMenu,
							SidebarToggleMenu: ToggleMenu
						}}
					/>
				</div>
				<div className="container-fluid p-4">{props.children}</div>
			</div>
		</div>
	);
};
export default DashboardIndex;
