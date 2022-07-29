function removeRotten(bagOfFruits){
    return bagOfFruits ? bagOfFruits.map(fruit=>fruit.toLowerCase().replace(/rotten/ig,"")) : [];
}