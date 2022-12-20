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
    }`;

    export const ProductContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    `;

    export const ProductItem = styled.div`
    display: flex;
  flex-direction: column;
  
  margin: 10px;
  padding: 10px;
  gap: 10px;
  border: 1px solid #ccc;
  background-color: #f0f67f;
    padding: 1em; 
  }
    `;
