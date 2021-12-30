
const avgRating = (obj) => {
  let wholeTotal = 0;
  let resTotal = 0;
  let resEach = [];

  if (obj) {
    Object.keys(obj).forEach((rating) => {
      wholeTotal += Number(obj[rating]) * Number(rating);
      resTotal += Number(obj[rating])
    })
    const result = wholeTotal / resTotal;
    if (Number.isNaN((Math.round(result * 4) / 4).toFixed(1))) {
      return 0
    }
    return result.toFixed(1);
  }
}

const calEachRating = (obj) => {
  let resTotal = 0;
  let resEach = [];
  let percent = 0;

  if (obj) {
    Object.keys(obj).forEach((rating) => {
      resTotal += Number(obj[rating])
    });
    for (let i = 1; i <= 5; i++) {
      resEach.push((obj[i] * 100 / resTotal).toFixed(1))
    };
  }
  console.log(resEach)
  return resEach;
}

module.exports = {
  avgRating,
  calEachRating,
}