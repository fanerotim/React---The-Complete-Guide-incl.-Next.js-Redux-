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