import passport from "passport";

const controller = {};

//! REGISTER

controller.renderRegistryView = (req, res) => {
  !req.user ? res.render("register") : res.render("index");
};

controller.signUpUser = passport.authenticate("signup", {
  successRedirect: "/",
  failureRedirect: "/register",
  passReqToCallback: true,
});

//! LOGIN

controller.renderLoginView = (req, res) => {
  !req.user ? res.render("login") : res.render("index");
};

controller.logInUser = passport.authenticate("login", {
  successRedirect: "/",
  failureRedirect: "/login",
  passReqToCallback: true,
});

//! PROFILE

controller.renderProfileView = (req, res) => {
  res.render("profile");
};

//! LOGOUT

controller.logoutUser = (req, res) => {
  req.logout((err) => {
    console.log(err);
  });
  res.redirect("/");
};

export default controller;
