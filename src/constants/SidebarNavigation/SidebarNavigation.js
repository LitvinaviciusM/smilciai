import React from "react"
import {SidebarList, SidebarListItem} from "./SidebarNavigation.styles";
import {useMenuQuery} from "../../hooks/queries/useMenuQuery";
import {NavScrollLink} from "../../components/Layout/Layout.styles";

const SidebarNavigation = ({setMenuState, menuState, active}) => {

    const {wpMenu: {menuItems: {nodes: menu}}} = useMenuQuery();

    return (
            <SidebarList>
                {menu.map(mainItem =>
                    !mainItem.parentId ? (
                        <SidebarListItem key={mainItem.id}>
                            <NavScrollLink activeClass={active} spy={true} offset={-128} onClick={() => setMenuState(!menuState)} to={mainItem.path}>
                                {mainItem.label}
                            </NavScrollLink>
                        </SidebarListItem>
                    ) : null
                )}
            </SidebarList>
    )
};

export default SidebarNavigation;