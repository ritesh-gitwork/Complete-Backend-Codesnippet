import { validateToken } from "../utils/token-utils.js";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (token && validateToken(token)) {
    req.user = { name: "ritesh ", id: 1 };
    next();
  } else {
    res.status(401).send("Unauthorized : invalid token");
  }
};

export default authMiddleware;
