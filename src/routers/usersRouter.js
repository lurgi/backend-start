import express from "express";
import { deleteStory, editStory, watchStory } from "../constrollers/stories";
import { editProfile, userHome, watchUser } from "../constrollers/users";

const userRouter = express.Router();

userRouter.get("/", userHome);
userRouter.get("/:id(\\d+)", watchUser);
userRouter.get("/edit-profile", editProfile);

export default userRouter;
