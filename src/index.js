const getTriangleArea = (leg) => 0.5 * leg * leg;

const fifthTask = () => 0.21;

const diceTask = (num) => {
  const diceNums = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ];

  let count = 0;
  const posibleCombinations = 36;

  for (let i = 0; i < diceNums.length; i += 1) {
    for (let j = 0; j < diceNums.length; j += 1) {
      if ((diceNums[i] + diceNums[j]) < num) {
        count += 1;
      }
    }
  }

  const goodCombination = posibleCombinations - count;
  return (goodCombination / posibleCombinations).toFixed(2);
};

const boxTask = (params) => {
  const [ redStr, blueStr ] = params;
  const red = Number(redStr);
  const blue = Number(blueStr);
  
  const boxChance = 1 / 3;
  const amount = red + blue;
  const relation = blue / amount;
  const result = (boxChance * relation) + boxChance;
  return result.toFixed(2);
};

const companyTask = (params) => {
  const [ withOne, withTwo, withAll ] = params;
  const result = 1 - (Number(withOne) + Number(withTwo) - Number(withAll));
  return result.toFixed(2);
};

const timeTask = (params) => {
  const [ timeStr, firstWaitStr, secondWaitStr ] = params;
  const time = Number(timeStr);
  const firstWait = Number(firstWaitStr);
  const secondWait = Number(secondWaitStr);
  
  const squareArea = time * time;
  const firstLeg = time - firstWait;
  const secondLeg = time - secondWait;

  const areaFirstTriangle = getTriangleArea(firstLeg);
  const areaSecondTriangle = getTriangleArea(secondLeg);
  const areaRiver = squareArea - (areaFirstTriangle + areaSecondTriangle);

  return (areaRiver / squareArea).toFixed(2);
};

export {
  diceTask,
  boxTask,
  companyTask,
  timeTask, 
  fifthTask,
};
