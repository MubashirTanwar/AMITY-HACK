import { addDoctor } from "../controllers/doctor";
import Router from "express";
const doctorRouter = Router();

doctorRouter.post("/add", addDoctor);

export default doctorRouter;