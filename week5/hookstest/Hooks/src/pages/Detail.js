import { useParams, useNavigate } from "react-router-dom";
import productList from "../__mock__/products.json";

function Detail() {
  const { productNumber } = useParams();
  const navigate = useNavigate();

  const product = productList.products.find(
    (product) => product.productNumber === productNumber
  );

  if (!product) {
    navigate("/state");
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>상품 설명</h1>
      <h2>상품 이름: {product.productName}</h2>
      <p>상품 넘버: {product.productNumber}</p>
      {product.Review.map((review, index) => (
        <div key={index}>
          <p>리뷰 작성자: {review.reviewer}</p>
          <p>리뷰: {review.review}</p>
          <p>평점: {review.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default Detail;

/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
    */
