import passport from "passport";

const controller = {};

//! REGISTER

controller.renderRegistryView = (req, res) => {
  res.render("register");
};

controller.signUpUser = passport.authenticate(
  "local-signup",
  {},
  (req, res) => {
    res.send({ error: false, msg: "user created" });
  }
);

//! LOGIN

controller.renderLoginView = (req, res) => {
  res.render("login");
};

controller.logInUser = passport.authenticate("local-signin", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
});

//! LOGOUT

controller.logoutUser = (req, res) => {
  req.session.destroy((err) => {
    res.redirect("login");
  });
};

export default controller;
