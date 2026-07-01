import cats from "./cats.js";
import { v4 } from "uuid";
import { getBreedById } from "./breedService.js";

export function readCats() {
    return cats;
}

export function addCat(catData){
    const breedName = getBreedById(catData.breed)?.name || 'Unknown Breed';
    const newCat = {
        id: v4(),
        ...catData,
       breed: breedName,
    };

    cats.push(newCat)
}

export function getCatById(catId) {
    return cats.find(cat => cat.id === catId);
}

export function editCat(catId, catData) {
    const catIndex = cats.findIndex(cat => cat.id === catId);
    if (catIndex === -1) {
        throw new Error("Cat not found");
        
    }

    if (catIndex !== -1) {
        const breedName = getBreedById(catData.breed)?.name || 'Unknown Breed';
        cats[catIndex] = {
            ...cats[catIndex],
            ...catData,
            breed: breedName,
        };
    } 
    
}

export function getBreedByName(breedName) {
    return breeds.find(breed => breed.name === breedName);
}

export function deleteCat(catId) {
    const catIndex = cats.findIndex(cat => cat.id === catId);
    if(catIndex === -1) {
        throw new Error("Cat not found");
    }
    if (catIndex !== -1) {
        cats.splice(catIndex, 1);
    }
}