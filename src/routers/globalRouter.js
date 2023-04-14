import express from "express";
import { home, newStories, trending } from "../constrollers/stories";
import { join, login } from "../constrollers/users";

const globalRotuer = express.Router();

globalRotuer.get("/", home);
globalRotuer.get("/trending", trending);
globalRotuer.get("/new", newStories);
globalRotuer.get("/join", join);
globalRotuer.get("/login", login);

export default globalRotuer;
