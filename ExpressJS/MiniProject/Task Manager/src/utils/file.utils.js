import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// access file and directory in es6 new js

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "data", "tasks.json");

export const readTasks = () => {
  try {
    ensureFileExists();
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data || "[]");
  } catch (error) {
    console.error("Error reading tasks", error);
    return [];
  }
};
