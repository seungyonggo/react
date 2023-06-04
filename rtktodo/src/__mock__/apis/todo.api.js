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
