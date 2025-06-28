import { GroupMember } from "@repo/common/types";
import prismaClient from "@repo/db";
import { Router } from "express";

const addMemberRouter = Router();

addMemberRouter.post("/", async (req, res) => {
    const parsedData = GroupMember.safeParse(req.body);

    if(!parsedData.success) {
        res.status(400).json({ msg: "Invalid Input" });
        return;
    }

    const { userId, groupId } = parsedData.data;
 
    try {
        await prismaClient.groupMember.create({
            data: {
                userId,
                groupId
            }
        })

        res.json({ msg: "Group Member added successfully" });
    } catch (error) {
        console.log("Could not create user", error);
        res.status(500).json({ msg: "could not add group member !!" });
    }
})

export default addMemberRouter;