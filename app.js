const bcrypt = require("bcrypt");
const express = require("express");

const User = require("./server/db/userModel");

const jwt = require("jsonwebtoken");

const auth = require("./auth");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.post("/test", (request, response) => {
  console.log(JSON.stringify(request.body));

  response.json(request.body);
});

// register endpoint
app.post("/register", (request, response) => {
  // hash the password
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      console.log("Antes de instancia");
      console.log("User Class: ",User);
      const user = new User({
        email: request.body.email,
        password: hashedPassword,
      });
      console.log("Despues de instancia");
      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    // .catch((e) => {
    //   response.status(500).send({
    //     message: "Password was not hashed successfully",
    //     e,
    //   });
    // });
});

// login endpoint
app.post("/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {

          // check if password matches
          if(!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        // catch error if password does not match
        // .catch((error) => {
        //   response.status(400).send({
        //     message: "Passwords does not match",
        //     error,
        //   });
        // });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
  response.json({ message: "You are authorized to access me" });
});




app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/login", (req, res) => {
  res.json({ message: "login" });
});

app.get("/news", (req, res) => {
  res.json({
    news: [
      {
        title: "Prueba1",
        body: "probandolala",
        author: "russ",
        image:
          "https://www.teamliquid.com/images/converted/2c8d4efaf6310b5903e53db6739c7fc10e4984bf.jpg",
      },
      {
        title: "Prueba2",
        body: "probandolala2",
        author: "russ2",
        image: "hola2",
      },
      {
        title: "Prueba3",
        body: "probandolala3",
        author: "russ3",
        image: "hola3",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
