export const login = (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).send("Username required");
  }

  // store user data in session
  req.session.user = { username };

  // set a cookie
  req.cookie("username", username, {
    httponly: true,
    maxAge: 1000 * 60 * 60 * 24,
  });

  res.json({ message: "Login Successfully", username });
};

export const logout = (req, res) => {
  res.clearCookie("username");
  res.session.destroy((err) => {
    if (err) {
      return res.status(500).send("error logging out");
    }
    res.json({ message: "Logout successfully " });
  });
};
