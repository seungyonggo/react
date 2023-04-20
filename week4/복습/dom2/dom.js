import mockPost from "./mock.json" assert { type: "json" };
console.log(mockPost);

// id가져오기
const postDetailEl = document.getElementById("post-detail");
const repliesListEl = document.getElementById("replies-list");
// 게시물에 mockpost의 post부분 가져오기
const postHtml = `
<h2>${mockPost.post.title}</h2>
<p>${mockPost.post.content}</p>
<p>작성자: ${mockPost.post.User.nickName}</p>
`;

// 댓글에 Replies을 가져오기
const repliesHtml = mockPost.post.Replies.map(
  (reply) => `
  <li>
  <p>${reply.content}</p>
  <p>작성자: ${reply.User.nickName}</p>
  </li>
  `
).join("");

// innerHTML로 콘텐츠 넣기
postDetailEl.innerHTML = postHtml;
repliesListEl.innerHTML = repliesHtml;

const $repliesList = document.querySelector("#replies-list");
const $input = document.querySelector("input");
const $plusBtn = document.querySelector("#plusBtn");

$plusBtn.addEventListener("click", () => {
  const comment = $input.value;
  const $li = document.createElement("li");
  $li.textContent = comment;
  const $deleteBtn = document.createElement("button");
  $deleteBtn.textContent = "삭제";
  $deleteBtn.addEventListener("click", () => {
    $li.remove();
  });
  const $editBtn = document.createElement("button");
  $editBtn.textContent = "수정";
  $editBtn.addEventListener("click", () => {
    const $input = document.createElement("input");
    $input.value = $li.textContent;
    const $saveBtn = document.createElement("button");
    $saveBtn.textContent = "저장";
    $saveBtn.addEventListener("click", () => {
      $li.textContent = $input.value;
      $li.appendChild($editBtn);
      $li.appendChild($deleteBtn);
    });
    $li.innerHTML = "";
    $li.appendChild($input);
    $li.appendChild($saveBtn);
  });
  $li.appendChild($editBtn);
  $li.appendChild($deleteBtn);
  $repliesList.appendChild($li);
  $input.value = "";
});
/* 
    import(참조)한 json data를
    게시글 상세와 댓글창에 나타내고 게시글 객체의 상세 내용은 console.log로 출력해두었습니다

    댓글 추가 버튼을 누르면 댓글이 추가되도록 해보세요 :)

    삭제 및 수정기능은 본인의 자유로 구현하시면 됩니다 :)
*/
