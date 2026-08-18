import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Session
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000
    }
  })
);

// Extend Express Session type
declare module "express-session" {
  interface SessionData {
    isLoggedIn?: boolean;
    username?: string;
  }
}

// Authentication Middleware
const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.session.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
};

// Login Page
app.get("/login", (req: Request, res: Response) => {
  res.render("login", {
    error: null
  });
});

// Login
app.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Hardcoded username and password
  if (username === "admin" && password === "123") {

    req.session.isLoggedIn = true;
    req.session.username = username;

    // Create cookie
    res.cookie(
      "lastVisit",
      new Date().toLocaleTimeString()
    );

    res.redirect("/dashboard");

  } else {

    res.render("login", {
      error: "Invalid credentials!"
    });

  }
});

// Dashboard
app.get(
  "/dashboard",
  authMiddleware,
  (req: Request, res: Response) => {

    const lastVisit =
      req.cookies.lastVisit || "First time!";

    res.render("dashboard", {
      user: req.session.username,
      lastVisit: lastVisit
    });
  }
);

// Logout
app.get("/logout", (req: Request, res: Response) => {

  req.session.destroy((err) => {

    if (err) {
      return res.status(500).send("Logout failed");
    }

    res.clearCookie("connect.sid");

    res.redirect("/login");
  });
});

// Start Server
app.listen(3000, () => {
  console.log("Server running at:");
  console.log("http://localhost:3000/login");
});