import breeds from "./breeds.js";
import { v4 } from "uuid";

export function readBread() {
    return breeds;
}
export function addBreed(breedName) {
    const newBreed = {
        id: v4(),
        name: breedName
    };
    breeds.push(newBreed);
}