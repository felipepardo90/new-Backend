import passport from "passport";
import LocalStrategy from "passport-local";
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
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallbacks: true,
    },
    async (req, email, password, done) => {
      try {
        const newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPass(password);
        await newUser.save();
        done(null, newUser);
        
      } catch (error) {
        console.log(error)
      }
    }
  )
);
