import { Router } from "express";
import { PostModel } from "../models/mysql/post.js";

export const postsRouter = Router();

postsRouter.get("/", PostModel.getAll);
postsRouter.post("/", PostModel.create);
postsRouter.put("/hide/:id", PostModel.updateHiddenPost);
postsRouter.put("/edit/:id", PostModel.updatePost);
