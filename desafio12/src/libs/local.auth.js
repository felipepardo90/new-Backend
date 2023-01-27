import passport from "passport";
import { Strategy } from "passport-local";
import Users from "../models/Users.js";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = Users.findById(id);
  done(null, user);
});

passport.use(
  "local-signup",
  new Strategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const { email } = req.body;

      const userFound = await Users.findOne({ email: email });
      console.log(userFound);
      if (userFound) {
        return done(
          null,
          false,
          req.flash("signup message", "Already registered")
        );
      } else {
        const user = await Users.create({
          username,
          password: Users.encryptPass(password),
          email,
        });
        done(null, user);
      }
    }
  )
);

//! SIGNIN

passport.use(
  "local-signin",
  new Strategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const userFound = await Users.findOne({ username });
      if (!userFound) {
        return done(null, false, req.flash("signin message", "User not found"));
      }
      if (!Users.validatePass(password, userFound.password)) {
        return done(
          null,
          false,
          req.flash("signin message", "Incorrect Password")
        );
      }
      done(null, userFound);
    }
  )
);
