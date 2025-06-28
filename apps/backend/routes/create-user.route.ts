import { Router } from "express";
import { User } from "@repo/common/types"
import prismaClient from "@repo/db";

const createUserRouter = Router();

createUserRouter.post("/", async (req, res) => {
    const parsedData = User.safeParse(req.body);

    if(!parsedData.success) {
        res.status(400).json({ msg: "Invalid Input" });
        return;
    }

    const { name, number, email } = parsedData.data;

    try {
        await prismaClient.user.create({
            data: {
                name,
                number,
                email
            }
        })

        res.json({ msg: "user created !!" });
    } catch (error) {
        console.log("Could not create user", error);
        res.status(500).json({ msg: "could not user !!" });
    }
})

export default createUserRouter;