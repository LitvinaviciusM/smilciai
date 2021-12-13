import styled from "styled-components";

export const Form = styled.form`
   width: 100%;
   z-index: 100;
   text-align: left;
`;

export const FormInsideWrapper = styled.div`
  display: grid;
  row-gap: 2.5rem;
  margin-bottom: 3.5rem;
`;

export const HiddenField = styled.input`
  display: none;
`;

export const InputField = styled.input`
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: none;
    background: ${props => props.theme.primaryLight};
    border-radius: 4px;
    font-size: clamp(0.875rem, 5vw, 1.125rem);
    line-height: 2rem;
  
  ::placeholder{
    color: ${props => props.theme.gray600};
    font-size: clamp(0.875rem, 5vw, 1.125rem);
    line-height: clamp(1.5rem, 5vw, 2rem);
  }
  
  :focus-visible{
    outline: 2px solid ${props => props.theme.primary};
  }
`;

export const TextAreaField = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: ${props => props.theme.primaryLight};
  border-radius: 4px;
  font-size: clamp(0.875rem, 5vw, 1.125rem);
  line-height: clamp(1.5rem, 5vw, 2rem);
  
  ::placeholder{
    color: ${props => props.theme.gray600};
    font-size: clamp(0.875rem, 5vw, 1.125rem);
    line-height: clamp(1.5rem, 5vw, 2rem);
  }
  
  :focus-visible{
    outline: 2px solid ${props => props.theme.primary};
  }
`;

export const SucceededMessage = styled.p`
  font-size: 21px;
  color: ${props => props.theme.black};
  margin-bottom: 0;
`;

export const FormLabel = styled.label`
  color: ${props => props.theme.black};
  width: 100%;
`;

export const FormLabelWithIcon = styled.label`
  color: ${props => props.theme.black};
  width: 100%;
  position: relative;
  
  p {
    position: absolute;
    bottom: -12px;
    left: 12px;
    color: ${props => props.theme.gray600};
  }
  
  input {
    padding: 0.5rem 0.75rem 0.5rem 2rem;
  }
`;

export const ContactLabelH6 = styled.h6`
  margin-bottom: 0.5rem;
`;

export const FormInlineWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  
  label:first-child {
    margin-right: 2rem;
    margin-bottom: 2.5rem;
  }
  
  @media screen and (min-width: ${props => props.theme.breakpoints.laptop}) {
        flex-direction: row;
        
        label:first-child {
            margin-right: 2rem;
            margin-bottom: 0;
        }
    }
`;
