import { z } from 'zod';

export const todoSchema = z.object({
  text: z.string().min(1, { message: "Todo description is required" }),
  dueDate: z.string().min(1, { message: "Due date is required" }),
});
