import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './TopMenu.scss';

const TopMenu = ({ onChange, location, menuList }) => {
	const { pathname } = location;

	const onClickHandler = pathname => {
		onChange(pathname);
	};

	const menuItems = menuList.map(({ id, to, content }) => {
		return (
			<Link key={id} to={to} onClick={() => onClickHandler(pathname)}>
				<Menu.Item content={content} active={pathname === to} />
			</Link>
		);
	});

	return <Menu>{menuItems}</Menu>;
};

export default TopMenu;
