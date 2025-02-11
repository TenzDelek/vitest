import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://dummyjson.com/todos", () => {
    return HttpResponse.json(
      {
        todos: [
          {
            id: 1,
            todo: "Buy groceries",
            completed: false,
            userId: 26,
          },
        ],
      },
      { status: 200 }
    );
  }),
];
