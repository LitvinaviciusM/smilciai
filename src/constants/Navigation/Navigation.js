import React from "react"
import { Link } from "gatsby"
import {NavWrapper, NavList, NavListItem} from "./Navigation.styles";
import {useMenuQuery} from "../../hooks/queries/useMenuQuery";
import {CaretDown} from "../../assets/svg/icons-and-logos";
import {NavScrollLink} from "../../components/Layout/Layout.styles";

const Navigation = ({active}) => {

    const {wpMenu: {menuItems: {nodes: menu}}} = useMenuQuery();

  return (
      <NavWrapper>
          <NavList>
              {menu.map(mainItem =>
                !mainItem.parentId ? (
                          <NavListItem key={mainItem.id}>
                            <NavScrollLink activeClass={active} spy={true} to={mainItem.path}>
                              {mainItem.label}
                              {mainItem.childItems.nodes.length !== 0 && <CaretDown/>}
                            </NavScrollLink>
                            {mainItem.childItems.nodes.length !== 0 ? (
                                <NavList>
                                 {mainItem.childItems.nodes.map(childItem => (
                                      <NavListItem key={childItem.id}>
                                        <Link to={childItem.path}>
                                          {childItem.label}
                                        </Link>
                                      </NavListItem>
                                  ))}
                                </NavList>
                            ) : null}
                        </NavListItem>
                    ) : null
              )}
          </NavList>
      </NavWrapper>
  )
};

export default Navigation;


