import styled from "styled-components";

export const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${props => {
        if (props.emailNotValid) {
            return props.emailNotValid ? '#f87171' : '#6b7280'
        }

        if (props.passwordNotValid) {
            return props.passwordNotValid ? '#f87171' : '#6b7280'
        }
    }};
`

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    line-height: 1.5;
    background-color: ${({ $emailNotValid, $passwordNotValid }) => {
        if ($emailNotValid) {
            return $emailNotValid ? '#fed2d2' : '#374151';
        }

        if ($passwordNotValid) {
            return $passwordNotValid ? '#fed2d2' : '#374151';
        }
    }};
    
    color: ${({ $emailNotValid, $passwordNotValid }) => {
        if ($emailNotValid) {
            return $emailNotValid ? '#f87171' : '#374151';
        }

        if ($passwordNotValid) {
            return $passwordNotValid ? '#f87171' : '#374151';
        }
    }};
    border: ${({$emailNotValid, $passwordNotValid}) => {
        if ($emailNotValid) {
            return $emailNotValid ?  '1px solid #f73f3f': '1px solid transparent'
        }

        if ($passwordNotValid) {
            return $passwordNotValid ? '1px solid #f73f3f' : '1px solid transparent'
        }
    }};
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0rgba(0, 0, 0, 0.1), 0 1px 2px 0rgba(0, 0, 0, 0.06)
`