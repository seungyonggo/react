import styled from "styled-components";

function formatPrice(price) {
  const formatted = Number(price).toLocaleString();
  return formatted;
}

function ProductCard({ product, onNavigate }) {
  const formattedPrice = formatPrice(product.productPrice);

  return (
    <Item onClick={onNavigate}>
      <h4>{product.productName}</h4>
      <p>Product number: {product.productNumber}</p>
      <p>Price: {formattedPrice} won</p>
      <p>Size: {product.productSize}</p>
      <p>Rating: {product.productRating}</p>
      <p>Review: {product.productReview}</p>
    </Item>
  );
}

export default ProductCard;

const Item = styled.li`
  border: 1px solid #000;
  cursor: pointer;
  width: 300px;
  margin: 16px auto;
`;

const S = {
  Item,
};
