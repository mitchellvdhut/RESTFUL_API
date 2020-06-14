import connection from "../DB/connection";
import express from "express";
import dotenv from "dotenv";
import PostController from "./controllers/postController";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connection();

app.listen(port, () => console.log(`App listening on port ${port}`));

let query = { 
  title: 'titel',
  body: 'dit is een test',
  author: 'Mitchell',
};

app.get("/", (req, res) => res.send("root"));
app.get("/posts/", (req, res) => {
  PostController.findAllPosts(req, res)
});
app.post("/posts/", (req, res) => {
  PostController.createOnePost(req, res, query)
});
app.get("/posts/:id", (req, res) => {
  let query = { _id: req.params.id }
  PostController.findOnePost(req, res, query)
});
app.delete("/posts/:id", (req, res) => {
  let query = { _id: req.params.id }
  PostController.findOneAndDelete(req, res, query)
});
app.patch("/posts/:id", (req, res) => {
  let query = { _id: req.params.id }
  let update = { author: 'ruben'}
  PostController.findOneAndUpdate(req, res, query, update)
});





// app.get("/posts/add/", (req, res) => {
//   PostController.createOnePost(req, res, query)
// });
// app.get("/posts/:id", (req, res) => {
//   let query = { _id: req.params.id }
//   PostController.findOnePost(req, res, query)
// });
// app.get("/posts/delete/:id", (req, res) => {
//   let query = { _id: req.params.id }
//   PostController.findOneAndDelete(req, res, query)
// });
// app.get("/posts/update/:id", (req, res) => {
//   let query = { _id: req.params.id }
//   PostController.findOneAndUpdate(req, res, query)
// });