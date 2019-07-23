import { Request, Response, Router } from "express";

const router = Router();

router.get("/users", (req: Request, res: Response) => {
  const users: string[] = [];

  res.status(200).json({ users });
});

export default router;
