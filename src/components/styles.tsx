import styled, { css } from "styled-components";
import Button from "./button";

interface IPropsStyled {
    active: boolean;
}
export const ProductItemDetail = styled.div<IPropsStyled>`
    display: flex;
    flex : 1;
    flex-direction: column;
    gap: 8px;
    
    :hover {
        span {
            color: red;
        }
    }

    span {
        text-align: start;
        color: ${(props) => (props.active ? "red" : "black")};
    }

    .title {
        font-weight: bold;
    }
    `;

    export const StyledButton = styled(Button)`
    color: red; !important;
    :hover { 
        color: blue !important;
    }

`;


