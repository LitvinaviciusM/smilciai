import styled from "styled-components";

export const FooterWrapper = styled.nav`

`;

export const FooterList = styled.ul`
    text-decoration: none;
    display: flex;
    justify-content: flex-end;
    margin: 0;
`;

export const FooterListItem = styled.li`
    text-decoration: none;
    margin: 0 2rem 0 0;
    list-style: none;
    font-size: 21px !important;
    
    :last-child {
      margin: 0;
    }
    
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 14px !important;
    }
    
    a {
     position:relative;
     align-items: center;
     z-index: 1;
     text-transform: uppercase;
     color: ${props => props.theme.white};
     font-weight: bold;
     letter-spacing: 0.5px;
     padding: 0.5rem 0rem;
     text-decoration: none;
     transition: 100ms;
     
     svg {
      margin-left: 0.25rem;
      width: 8px;
     }
     
     :hover {
          color: ${props => props.theme.primaryHover};
          // box-shadow: 0px 1px ${props => props.theme.primary};
      
          svg {
            fill: ${props => props.theme.primary};
          }
     }
    }
`;
