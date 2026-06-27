import breeds from "./breeds.js";

export function readBread() {
    return breeds;
}
export function addBreed(breedName) {
    const newBreed = {
        id: breeds.length + 1,
        name: breedName
    };
    breeds.push(newBreed);
}