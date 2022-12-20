import { IProduct } from "../interfaces";
import { ProductItem, ProductItemDetail, StyledButton } from "./styles";

export const Product: React.FC<IProduct> = ({
    title, 
    thumbnail, 
    price, 
    description,
    active
}) => {
    return (
        <ProductItem>
            <img width={65} height={65} src={thumbnail} />
            <ProductItemDetail active={active || false} >
                <span className="title">{title}</span>
                <span>{price}</span>
                <span>{description}</span>
            </ProductItemDetail>
            <div>
            <StyledButton>tambah cart</StyledButton>
            </div>
        </ProductItem>
    )  
}
