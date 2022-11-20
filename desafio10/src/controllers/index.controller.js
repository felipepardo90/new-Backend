const controller = {};

const user = {
  name: "Felipao",
};

controller.index = (req, res) => {
  req.session.user ? res.render("index", { user: user }) : res.render("login");
};

controller.post = (req, res) => {
  const { user } = req.body;
  req.session.user = user;
  res.redirect("/");
};

export default controller;
