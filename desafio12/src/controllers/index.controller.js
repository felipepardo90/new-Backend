const controller = {};

controller.index = (req, res) => {
  // req.session.user ? res.render("index") : res.render("login");
  const user = { name: "Felipe" };
  res.render("index", { user: user });
};

controller.post = (req, res) => {
  const { user } = req.body;
  req.session.user = user;
  res.redirect("/");
};

export default controller;
