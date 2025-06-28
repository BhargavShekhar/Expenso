import { Expenses } from "@repo/common/types";
import prismaClient from "@repo/db";
import { Router } from "express";

const addExpencesRouter = Router();

addExpencesRouter.post("/", async (req, res) => {
    const parsedData = Expenses.safeParse(req.body);

    if(!parsedData.success) {
        res.status(400).json({ msg: "Invalid Input" });
        return;
    }

    const { cost, groupMemberId, name } = parsedData.data;

    try {
        await prismaClient.expenses.create({
            data: {
                cost,
                groupMemberId,
                name
            }
        })

        res.json({ msg: "Expense added successfully" });
    } catch (error) {
        console.log("Could not create user", error);
        res.status(500).json({ msg: "could not add expense !!" });
    }
})

export default addExpencesRouter;