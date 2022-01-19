import styled from "styled-components";

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  width: 100%;
  margin-top: 2rem;
  text-align: left;
  
  ul:last-child{
   grid-column: 1/-1;
  }
  
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.laptop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`;

export const ContactItems = styled.div`
   grid-column: 1/-1;  
    text-align: center;
    align-self: center;
    justify-self: center;
    width: 100%;
  @media screen and (min-width: ${props => props.theme.breakpoints.laptop}) {
    grid-row: 1/1;
    grid-column: 1/-1;
    text-align: left;
    justify-self: left;
  }
  
  ul {
    list-style: none;
    background: ${props => props.theme.primaryLight};
    padding: 1rem 1.5rem;
    border-radius: 4px;
  }
  
  li:first-child {
    font-size: 14px;
    color: ${props => props.theme.gray900};;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 0.25rem;
  }
  
  li:nth-child(2) {
    font-size: 21px;
    font-weight: 600;
  }
  
  a {
    font-size: 21px;
    font-weight: 600;
    color: ${props => props.theme.black};
  }
`;

export const ContactFormWrapper = styled.div`
  border-radius: 5px;
  grid-column: 1/-1;
  justify-self: center;
  width: 100%;
  text-align: left;

  @media screen and (min-width: ${props => props.theme.breakpoints.laptopL}) {
    grid-row: 2/2;
    grid-column: 1/6;
    max-width: 100%;
  }
`;

export const ContactsWrapper = styled.div`
     grid-column: 1/13;
     align-self: center;
     margin-bottom: 2rem;
     grid-row: 1;
 
  @media screen and (min-width: ${props => props.theme.breakpoints.laptopL}) {
        grid-column: 1/7;
        margin-bottom: 0;
    }
 
`;