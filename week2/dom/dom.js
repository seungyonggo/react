const tabs = document.querySelectorAll(".tab");
const tabBodies = document.querySelectorAll(".block");

function showTab(tabIndex) {
  for (let i = 0; i < tabBodies.length; i++) {
    if (tabBodies[i].textContent.includes(`탭${tabIndex}`)) {
      tabBodies[i].style.display = "block";
    } else {
      tabBodies[i].style.display = "none";
    }
  }
}

tabs.forEach(function (tab, index) {
  tab.addEventListener("click", function () {
    // 모든 탭의 배경색과 글자색을 원래대로 되돌린다
    // 모든 탭을 순회하며 색을 초기화
    tabs.forEach(function (tab) {
      tab.style.backgroundColor = "";
      tab.style.color = "";
    });
    // 클릭된 탭의 배경색과 글자색을 변경한다
    tab.style.backgroundColor = "red";
    tab.style.color = "white";

    // 클릭된 탭과 순서가 같은 탭 컨텐츠를 보여준다
    // 클릭하면 모든 block을 none으로 바꿔주기
    showTab(index + 1);
  });
});
