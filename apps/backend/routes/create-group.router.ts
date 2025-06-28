import { Group } from "@repo/common/types";
import prismaClient from "@repo/db";
import { Router } from "express";

const createGroupRouter = Router();

createGroupRouter.post("/", async (req, res) => {
    const parsedData = Group.safeParse(req.body);

    if (!parsedData.success) {
        res.status(400).json({ msg: "Invalid Input" });
        return;
    }

    const { name, userId } = parsedData.data;

    try {
        await prismaClient.group.create({
            data: {
                name,
                userId
            }
        })

        res.json({ msg: "Group created successfully" });
    } catch (error) {
        console.log("Could not create user", error);
        res.status(500).json({ msg: "could not create group !!" });
    }
})

export default createGroupRouter;