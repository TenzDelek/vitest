import { setupServer } from "msw/node";
import { handlers } from "./handlers";

//server worker for the given request handler
export const server = setupServer(...handlers);
