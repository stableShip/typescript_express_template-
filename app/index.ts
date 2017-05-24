import {createExpressServer} from "routing-controllers";
import {UserController} from "./controller/UserController";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
    controllers: [UserController] // we specify controller we want to use
});

export {app};