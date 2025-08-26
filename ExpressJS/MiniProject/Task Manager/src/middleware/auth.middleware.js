export const middleware = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  }
  res.status(401).send("Unauthorized please login");
};
