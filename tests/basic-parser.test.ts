import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)

  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for (const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("parses empty field", async () => {
  const csv = "A, ,B";
  const result = parseCSV(csv);
  expect(result).toEqual([["A", "", "B"]]);
});

test("parses quoted field", () => {
  const csv = '"A","B","C"';
  const result = parseCSV(csv);
  expect(result).toEqual([["A", "B", "C"]]);
});

test("parses commas in field", () => {
  const csv = '"A","B, C","D"';
  const result = parseCSV(csv);
  expect(result).toEqual([["A", "B, C", "D"]]);
});

test("parses rows with different column counts", () => {
  const csv = "A,B,C\n1,2";
  const result = parseCSV(csv);
  expect(result).toEqual([["A", "B", "C"], ["1", "2"]]);
});

test("parses newlines inside quotes", () => {
  const csv = `"A","B\nB","C"`;
  const result = parseCSV(csv);
  expect(result).toEqual([["A", "B\nB", "C"]]);
});

test("parses trailing commas", () => {
  const csv = "A,B,C,";
  const result = parseCSV(csv);
  expect(result).toEqual([["A", "B", "C", ""]]);
});

