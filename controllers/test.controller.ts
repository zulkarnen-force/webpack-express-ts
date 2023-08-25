import { Router, Request, Response } from "express";
const UserRouter: Router = Router();
UserRouter.get("/", (req: Request, res: Response) => {
  return res.json({ msg: "msg from" });
});
export default UserRouter;
