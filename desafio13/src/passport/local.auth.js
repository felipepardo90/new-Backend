import passport from "passport";
import Strategy from "passport-local";
import User from "../models/Users.js";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  "local-signup",
  new Strategy({ passReqToCallback: true }, (req, username, password, done) => {
    console.log(username, password);

    const { email } = req.body;
    Users.findOne({ username }, (err, user) => {
      console.log(user);
      console.log(err);
      if (user) return done(null, false);

      Users.create(
        { username, password: hasPassword(password), email },
        (err, user) => {
          if (err) return done(err);
          //null    // obj // truthy
          return done(null, user);
        }
      );
    });
  })
);

passport.use(
  "local-signin",
  new Strategy({}, (username, password, done) => {
    Users.findOne({ username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      if (!validatePass(password, user.password)) return done(null, false);
      return done(null, user);
    });
  })
);