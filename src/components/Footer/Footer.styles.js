import styled from 'styled-components';
import {Link} from "gatsby";
import { MainLogoAlt} from "../../assets/svg/icons-and-logos";

export const FooterLink = styled(Link)`
   display: flex;
   align-items: center;
   text-decoration: none;
   height: 100%;
   cursor: pointer;
`;

export const FooterLogo = styled(MainLogoAlt)`
   color: ${props => props.theme.white};
   height: 78px;
   
   @media screen and (max-width: ${props => props.theme.breakpoints.phone}) {
        height: 70px;
    }
`;

export const FooterSection = styled.footer`
  background: ${props => props.theme.black};
  padding: 2rem 0;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 5rem;
  }
`;

export const FooterContainer = styled.div`
  max-width: ${props => props.theme.wrapperWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1.5rem;
  margin: 0 auto;
  flex-direction: column;
  
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const FooterCopyright = styled.p`
    color: ${props => props.theme.primaryLight};
    font-weight: 400;
    padding: 0;
    margin: 2rem 0 0 0;
    font-size: 14px;
    text-align: center;
    
    a {
      color: ${props => props.theme.primaryLight};
      text-decoration: none;
      font-weight: 600;
      &:hover{
        color: ${props => props.theme.primary};
      }
    }
    
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
     margin: 0;
  }
`;


