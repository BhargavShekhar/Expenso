import express from "express";
import createUserRouter from "./routes/create-user.route";
import createGroupRouter from "./routes/create-group.router";
import addMemberRouter from "./routes/add-member.router";
import addExpencesRouter from "./routes/add.expenses.router";

const port = process.env.BACKEND_PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ msg: "Hello World" });
})

app.use("/create-user", createUserRouter);
app.use("/create-group", createGroupRouter);
app.use("/add-member", addMemberRouter);
app.use("/add-expense", addExpencesRouter);

app.listen(port, () => {
    console.log(`---- App running on port ${port} ----`);
})