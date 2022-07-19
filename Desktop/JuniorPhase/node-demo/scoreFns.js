const computeAverage = (scores) => {
    return Math.round(scores.reduce((accum, elem)=>{
        accum+= elem
        return accum;
    }, 0)/ scores.length)
}

console.log(computeAverage([78, 82, 97]));

module.exports {
    computeAverage
}