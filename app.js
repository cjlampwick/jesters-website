const bcrypt = require("bcrypt");
const express = require("express");

const jwt = require("jsonwebtoken");
const auth = require("./auth");
const PORT = process.env.PORT || 3001;
const app = express();
const dotenv = require("dotenv");

dotenv.config();

// require database connection
const dbConnect = require("./server/db/dbConnect");
const User = require("./server/db/userModel");
const Appointment = require("./server/db/appointmentModel");

// execute database connection
dbConnect();

app.use(express.json());

var cors = require("cors");
const { response } = require("express");

app.use(cors());

app.post("/test", (request, response) => {
  console.log(JSON.stringify(request.body));

  response.json(request.body);
});

app.post("/coworking", (request, response) => {
  const appointment = new Appointment({
    userId: request.body.userId,
    dateFrom: request.body.dateFrom,
    dateTo: request.body.dateTo,
    halfFrom: 1,
    halfTo: 2,
    // pointmentStatus: request.body.ppointmentStatus,
  });

  appointment
    .save()
    .then((result) => {
      response.status(201).send({
        message: "saved date",
        result,
      });
    })
    .catch((error) => {
      response.status(500).send({
        message: "Error saved date",
        error,
      });
    });
});
// register endpoint
app.post("/register", (request, response) => {
  // hash the password
  bcrypt.hash(request.body.password, 10).then((hashedPassword) => {
    // create a new user instance and collect the data
    const user = new User({
      email: request.body.email,
      password: hashedPassword,
      fullName: request.body.fullName,
      dateBirth: request.body.dateBirth,
      dni: request.body.dni,
    });
    // save the new user

    console.log("user: ", user);

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
  });
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
  console.log("email: ", request.body.email);
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      if (user) {
        // console.log("body password: ",request.body.password);
        // console.log("user password: ",user.password);
        bcrypt
          .compare(request.body.password, user.password)

          // if the passwords match
          .then((passwordCheck) => {
            // console.log("passwordCheck: ", passwordCheck);
            // check if password matches
            if (!passwordCheck) {
              return response.status(400).send({
                message: "Passwords does not match",
                error: 402,
              });
            }

            // console.log("before token");
            //   create JWT token
            const token = jwt.sign(
              {
                userId: user._id,
                userEmail: user.email,
              },
              "RANDOM-TOKEN",
              { expiresIn: "24h" }
            );

            // console.log("after token: ",token);

            //   return success response
            response.status(200).send({
              message: "Login Successful",
              id: user._id,
              fullName: user.fullName,
              email: user.email,
              token,
            });
          });
      } else {
        response.status(400).send({
          message: "Passwords or user does not match",
          error,
        });
      }
      // compare the password entered and the hashed password found
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
