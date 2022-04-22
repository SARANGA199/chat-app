const express = require("express");
const dotenv = require("dotenv");
const {chats} = require("./data/data");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`server started on PORT ${PORT}`));

app.get("/", (req, res) => {
  res.send("API UP AND RUNNING !!!");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
   const singlechat = chats.find((c)=>c._id===req.params.id);
   res.send(singlechat);
});


