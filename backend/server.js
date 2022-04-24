const express = require("express");
const dotenv = require("dotenv");
const {chats} = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


dotenv.config(); 
const app = express();
connectDB();
app.use(express.json()); //to accept json data from frontend

app.use('/api/user',userRoutes);
app.use("/api/chat", chatRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`server started on PORT ${PORT}`.blue.bold));




