import { parseCSV } from "./basic-parser";
import { PersonRowSchema } from "./schema";
import { ClassSchema } from "./schema";
import { FoodSchema } from "./schema";

/*
  Example of how to run the parser outside of a test suite.
*/

const PEOPLE_FILE = "./data/people.csv"; // update with your actual file name
const FOOD_FILE = "./data/foods.csv";
const CLASS_FILE = "./data/classes.csv";


async function main() {
  // Because the parseCSV function needs to "await" data, we need to do the same here.
  try {
    //Parsing people with the corresponding schema
    const people = await parseCSV(PEOPLE_FILE, PersonRowSchema)

    // Notice the difference between "of" and "in". One iterates over the entries, 
    // another iterates over the indexes only.
    for (const record of people)
      console.log(record)
    for (const record in people)
      console.log(record)
    //Parsing food with the corresponding schema
    console.log("\n=== Foods ===");
    const foods = await parseCSV(FOOD_FILE, FoodSchema);
    for (const record of foods)
      console.log(record);
    for (const record in foods)
      console.log(record)

    //Parsing classes with the corresponding schema
    console.log("\n=== Classes ===");
    const classes = await parseCSV(CLASS_FILE, ClassSchema);
    for (const record of classes)
      console.log(record);
    for (const record in classes)
      console.log(record)
  } catch (err) {//Catches an error
    console.error("Error parsing CSV:", err);
  }
}

main();