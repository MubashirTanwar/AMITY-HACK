import { addRequest, getAllRequests, getRequest } from "../controllers/request.js";
import Router from "express";
const requestRouter = Router();

requestRouter.post("/add", addRequest);
requestRouter.get("/get", getAllRequests);
requestRouter.get("/get/:id", getRequest);

export default requestRouter;
