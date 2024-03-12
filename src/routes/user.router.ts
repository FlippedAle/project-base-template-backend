import { Request, Response, NextFunction, Router } from "express";
import { userService } from "../services/user.service";

export const userRoute = Router();

userRoute.get(
  "/",
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await userService.getAll());
    } catch (err: any) {
      console.error(`Error while getting the users `, err.message);
      next(err);
    }
  }
);

userRoute.get(
  "/:user",
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await userService.getOne(req.params.user));
    } catch (err: any) {
      console.error(`Error while getting the users `, err.message);
      next(err);
    }
  }
);

/*userRoute.post("/", async function (req, res, next) {
  try {
    res.json(await userService.add(req.body));
  } catch (err) {
    console.error("Error while adding the user: ", err.message);
    next(err);
  }
});

userRoute.put("/:user", async function (req, res, next) {
  try {
    res.json(await userService.updateOne(req.params.user, req.body));
  } catch (err) {
    console.error("Error while updating the section: ", err.message);
    next(err);
  }
});*/

userRoute.delete(
  "/:user",
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await userService.deleteOne(parseInt(req.params.user)));
    } catch (err: any) {
      console.error("Error while deleting the user: ", err.message);
      next(err);
    }
  }
);
