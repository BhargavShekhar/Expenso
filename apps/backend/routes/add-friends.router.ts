import { Friend } from "@repo/common/types";
import { Router } from "express";

const addFriendRouter = Router();

addFriendRouter.post("/", async (req, res) => {
    const parsedData = Friend.safeParse(req.body);

    if(!parsedData.success) {
        res.status(400).json({ msg: "Invalid Input" });
        return;
    }

    const { number } = parsedData.data;

    try {
        
    } catch (error) {
        
    }
})

export default addFriendRouter