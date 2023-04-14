import express from "express";
import globalRotuer from "./routers/globalRouter";
import userRouter from "./routers/usersRouter";
import storyRouter from "./routers/storiesRouter";

const app = express();

app.use("/", globalRotuer);
app.use("/users", userRouter);
app.use("/stories", storyRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
