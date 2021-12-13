import React from 'react';
import {Link} from "gatsby";
import {FooterWrapper, FooterList, FooterListItem} from "./FooterNavigation.styles"
import {NavScrollLink} from "../../components/Layout/Layout.styles";

const FooterNavigation = ({menu}) => {
    return (
        <FooterWrapper>
            <FooterList>
                {menu.map(mainItem =>
                    !mainItem.parentId ? (
                        <FooterListItem key={mainItem.id}>
                            <NavScrollLink to={mainItem.path}>
                                {mainItem.label}
                            </NavScrollLink>
                            {mainItem.childItems.nodes.length !== 0 ? (
                                <FooterList>
                                    {mainItem.childItems.nodes.map(childItem => (
                                        <FooterListItem key={childItem.id}>
                                            <Link activeClassName="nav-active" to={childItem.path}>
                                                {childItem.label}
                                            </Link>
                                        </FooterListItem>
                                    ))}
                                </FooterList>
                            ) : null}
                        </FooterListItem>
                    ) : null
                )}
            </FooterList>
        </FooterWrapper>
    );
};

export default FooterNavigation;