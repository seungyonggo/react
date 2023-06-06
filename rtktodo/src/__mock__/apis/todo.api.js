import { todoMock } from "__mock__/datas/todo.data";
import { rest } from "msw";

export const getTodo = rest.get("/api/todo", async (_, res, ctx) => {
  //query문이 들어가는 곳
  return res(ctx.status(200), ctx.json(todoMock));
  // front에서 request -> response todoMock
});

export const addTodo = rest.post("/api/todo", async (req, res, ctx) => {
  let title;
  let content;

  await req.json().then((data) => {
    title = data.title;
    content = data.content;
  });
  return res(
    ctx.status(200),
    ctx.json({
      id: Math.floor(Math.random() * 1000000),
      title,
      content,
      state: false,
    })
    // 클라이언트한테 request(title,content) -> response newTodo(title,content)
  );
});

export const deleteTodo = rest.delete("/api/todo/:id", (req, res, ctx) => {
  const { id } = req.params;
  return res(
    ctx.status(200),
    ctx.json({
      id, //를 받아와서 filter돌려야한다.
    })
  );
});

// api 등록 -> msw 생성 -> msw 동작

export const updateTodo = rest.put("/api/todo/:id", (req, res, ctx) => {
  const { id } = req.params; // params는 경로 매개변수를 나타내는 속성 경로에 콜론 : 으로표시된 매개변수 값을 추출
  const { state } = req.body; // body는 본문에 포함된 데이터를 나타내는 속성 주로 POST또는 PUT요청과 함께 전송되는 데이터를 읽어옴
  const { content } = req.body;
  return res(
    ctx.status(200),
    ctx.json({
      // json은 id를 문자열로 받아서 숫자로 형변환해줘야한다.
      id,
      state,
      content,
    })
  );
});
export const updateTodoEdit = rest.put("/api/todo/:id", (req, res, ctx) => {
  const { id } = req.params;
  const { state } = req.body;
  const { content } = req.body;
  return res(
    ctx.status(200),
    ctx.json({
      id,
      state,
      content,
    })
  );
});
