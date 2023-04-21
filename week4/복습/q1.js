const user = {
  name: "김성용",
  age: 20,
  height: 190,
};

// 문제1. 위의 객체를 아래의 메소드를 이용하여 반환 값을 출력 하고 각 메소드의 기능을 정의할 것

/* 
(1) user[”key”], user.key
(2) Object.keys()
(3) Object.values()
(4) Object.entries()
(5) for in
*/
for (let key in user) {
  console.log(key, user[key]);
}
// 문제2. 값이 “김성용”인 속성의 key 찾기
for (let key in user) {
  if (user[key] === "김성용") {
    console.log(key, user[key]);
    break;
  }
}
// 문제3. 깊은 복사를 통해 user 객체의 복사본을 만든 후 name을 본인의 이름으로 수정
const clone = { ...user };
clone.name = "고승용";
console.log(user);
console.log(clone);
