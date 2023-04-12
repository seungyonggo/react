//떡잎유치원 학생들이 어린이대공원에 소풍을 갔습니다. 근데 갑자기 얼룩말 세로가 탈출을 해서 그 세로를 찾으러
//떡잎 방범대를 결성해서 3조로 나누어 모험을 떠나려고 합니다.
//한 방범대는 3명으로 이루어져 있습니다.남은 조는 부족해도 괜찮습니다.
//같은 방범대 안에는 같은 성씨의 학생이 들어가면 안됩니다.
//여러분이 방범대를 결성해서 세로를 구출해 주세요.
//학생이름은 '이웅모','신짱구','김성용','김지웅','김철수','배수지','신짱아','이육사' 입니다.

//풀이법1.
const students = [
  "이웅모",
  "신짱구",
  "김성용",
  "김지웅",
  "김철수",
  "배수지",
  "신짱아",
  "이육사",
];
const studentNew = students.sort();
let answer = [[], [], []];
for (let i = 0; i < studentNew.length; i++) {
  let rest = i % 3;
  answer[rest].push(studentNew[i]);
}
console.log(answer);

//풀이법2
for (let i = 0; i < studentNew.length; i++) {
  if (i % 3 === 0) {
    one += studentNew[i];
  } else if (i % 3 === 1) {
    two += studentNew[i];
  } else {
    three += studentNew[i];
  }
}
console.log(one, two, three);
