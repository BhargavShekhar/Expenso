import { z } from "zod";
import validator from "validator";
 
export const User = z.object({
    email: z.string().email().optional(),
    name: z.string(),
    number: z.string().refine(validator.isMobilePhone)
})

export const GroupMember = z.object({
    userId: z.string(),
    groupId: z.string(),
})

export const Group = z.object({
    name: z.string(),
    userId: z.string()
})

export const Expenses = z.object({
    name: z.string(),
    cost : z.number(),
    groupMemberId: z.string()
})

export const Friend = z.object({
    number: z.string().refine(validator.isMobilePhone)
})