import { z } from "zod";

//Person Row Schema
// Define the schema. This is a Zod construct, not a TypeScript type.
export const PersonRowSchema = z.tuple([z.string(), z.coerce.number()])
    .transform(tup => ({ name: tup[0], age: tup[1] }))

// Define the corresponding TypeScript type for the above schema. 
// Mouse over it in VSCode to see what TypeScript has inferred!
export type Person = z.infer<typeof PersonRowSchema>;

//Food Schema
export const FoodSchema = z
    .tuple([z.string(), z.coerce.string(), z.coerce.number()])
    .transform(([name, cuisine, price]) => ({ name, cuisine, price }));
// Define the corresponding TypeScript type for the above schema. 
export type Food = z.infer<typeof FoodSchema>;

//Class Schema
export const ClassSchema = z
    .tuple([z.string(), z.coerce.number(), z.coerce.string()])
    .transform(([department, classNumber, teacher]) => ({ department, classNumber, teacher }));
// Define the corresponding TypeScript type for the above schema. 
export type Class = z.infer<typeof ClassSchema>;


