import express from "express";
import { deleteStory, editStory, watchStory } from "../constrollers/stories";

const storyRouter = express.Router();

storyRouter.get("/:id(\\d+)", watchStory);
storyRouter.get("/:id(\\d+)/edit", editStory);
storyRouter.get("/:id(\\d+)/delete", deleteStory);

export default storyRouter;
