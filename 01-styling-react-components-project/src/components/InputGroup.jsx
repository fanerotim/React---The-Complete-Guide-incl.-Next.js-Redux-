import { Label } from "./Label";
import { Input } from "./Input";
import styled from "styled-components";
import render from "styled-components"

const InputGroup = ({passwordNotValid, emailNotValid, children, ...props}) => {

    return (
        <>
            <Label 
                $passwordNotValid={passwordNotValid} 
                $emailNotValid={emailNotValid}
            >
                {children}
            </Label>
            <Input 
                $passwordNotValid={passwordNotValid} 
                $emailNotValid={emailNotValid}
                {...props}
            />
        </>
    )
}

export default InputGroup;