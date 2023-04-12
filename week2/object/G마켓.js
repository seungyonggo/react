const product = [
  {
    id: 1,
    name: "[피코크]피코크 떡갈비 450gX6팩 (신세계푸드 중복쿠폰 할인)",
    price: 45000,
    sale: 0.01,
    delivery: {
      smile: true,
      free: true,
    },
  },
  {
    id: 2,
    name: "[노르딕내추럴](오플닷컴) 2개 프로 오메가3 1280mg 650 EPA 450 DHA 레몬맛 180 소프트젤 Nordic 빠른직구",
    price: 110500,
    delivery: {
      smile: false,
      free: true,
    },
  },
  {
    id: 3,
    name: "[고등어밥상]가시제거연구소 본사운영 오렌지라벨 800g+800g 고등어밥상 순",
    price: 35600,
    sale: 0.3,
    delivery: {
      smile: false,
      free: true,
    },
  },
  {
    id: 4,
    name: "[스파클]스파클생수 2L 30병 무라벨생수",
    price: 24100,
    sale: 0.29,
    delivery: {
      smile: false,
      free: true,
    },
  },
  {
    id: 5,
    name: "[동원참치]동원 라이트 스탠다드 참치 150g 원터치 10개",
    price: 24900,
    sale: 0.08,
    delivery: {
      smile: false,
      free: true,
    },
  },
  {
    id: 6,
    name: "[스타벅스]스타벅스 캡슐커피 by 네스프레소 9박스(90캡슐/골라담기/당일출고)",
    price: 56430,
    sale: 0.08,
    delivery: {
      smile: false,
      free: true,
    },
  },
  {
    id: 7,
    name: "[프레시누리]프리미엄 우삼겹(3초구이 샤브) 250gX4팩",
    price: 19900,
    sale: 0.29,
    delivery: {
      smile: false,
      free: true,
    },
  },
  {
    id: 8,
    name: "[스파클]스파클생수 500ml 100병 무라벨생수",
    price: 28400,
    sale: 0.29,
    delivery: {
      smile: false,
      free: true,
    },
  },
];
// 문제1. 해당 데이터를 추가해주세요
/*
{
  id: 9,
  name: "[손김치]엄마손 김치 1kg",
  price: 13000,
  sale: none,
  delivery:{
    smile: true,
    free: true,
  },
},
*/

// 정답
// const added_list = {
//   id: 9,
//   name: "[손김치]엄마손 김치 1kg",
//   price: 13000,
//   delivery: {
//     smile: true,
//     free: true,
//   },
// };
// product.push(added_list);
// console.log(product);

// 문제2. 데이터 조회
// 스마일 배송이 불가능한 상품을 조회하시오
// const search_item = product.filter(
//   (product) => product.delivery.smile === false
// );
// console.log(search_item);

// 문제3. 데이터 삭제
// id가 9인 데이터를 삭제하시오
// const delete_id = product.filter((product) => product.id !== 9);
// console.log(delete_id);

// 문제4. 데이터 수정
// 스마일 배송이 가능한 상품을 불가능으로 만드시오
// product.forEach((product) => {
//   product.delivery.smile = false;
// });
// console.log(product);

// 문제5. 중간 데이터 삭제
// id가 5인 데이터를 삭제하시오
// id에 5를 포함해서 순서대로 정렬하시오
// const delete_id = product.filter((product) => product.id !== 5);
// product.forEach((product) => {
//   if (product.id > 5) {
//     product.id = product.id - 1;
//   }
// });
// console.log(delete_id);
