import styled from "styled-components";


export const NavWrapper = styled.nav`
  position: sticky;
   top: 0;
`;

export const NavList = styled.ul`
    text-decoration: none;
    display: flex;
    justify-content: flex-end;
    margin: 0;
`;

export const NavListItem = styled.li`
    text-decoration: none;
    margin-left: 3rem;
    list-style: none;
    font-size: 1rem;
    
    a {
     position:relative;
     align-items: center;
     z-index: 1;
     color: ${props => props.theme.black};
     font-weight: 600;
     padding: 0.5rem 0rem;
     text-decoration: none;
     transition: 100ms;
     
     :hover {
          color: ${props => props.theme.primaryHover};
     }
    }
`;
