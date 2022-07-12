import React from "react";
import MenuItem from './MenuItem'

interface MenuItemModel {
    name: string,
    icon: string,
    link: string
}
function Menu() {
    const menuData: MenuItemModel[] = require('../../model/menu.json');

    return(
        <ul>
            {menuData.map(menuItem => (
                <MenuItem key={menuData.indexOf(menuItem)} name={menuItem.name} icon={menuItem.icon} link={menuItem.link} />
            ))}
        </ul>
    );
}

export default Menu
