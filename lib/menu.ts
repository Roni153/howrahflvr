import fs from "fs";
import path from "path";
import { MenuItem } from "./validation";

const MENU_PATH = path.join(process.cwd(), "public", "menu.json");

export function readMenu(): MenuItem[] {
  try {
    const raw = fs.readFileSync(MENU_PATH, "utf-8");
    const data = JSON.parse(raw) as MenuItem[];
    return data;
  } catch (e) {
    console.error("Failed to read menu.json", e);
    return [];
  }
}

export function writeMenu(items: MenuItem[]) {
  try {
    fs.writeFileSync(MENU_PATH, JSON.stringify(items, null, 2), "utf-8");
  } catch (e) {
    console.error("Failed to write menu.json", e);
    throw e;
  }
}
