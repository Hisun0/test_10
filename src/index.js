const getTriangleArea = (leg) => 0.5 * leg * leg;

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }

  const iter = (counter, acc) => {
    if (counter === 1) {
      return acc;
    }
    return iter(counter - 1, counter * acc);
  };

  return iter(n, 1);
};

const formula = (amount, question) => {
  const numMinusQuestion = amount - question;
  return Math.round(factorial(amount) / (factorial(numMinusQuestion) * factorial(question)));
};

const fifthTask = (params) => {
  const nums = params.map((el) => Number(el));
  const [ goodQuestions, amount, need, questions ] = nums;
  
  const noNeedAnswers = questions - need;
  const badQuestions = amount - goodQuestions;
  
  const totalVariants = formula(amount, questions);
  const firstEvent = (formula(goodQuestions, need) * formula(badQuestions, noNeedAnswers)) / totalVariants;
  const secondEvent = (formula(goodQuestions, need + 1) * formula(badQuestions, noNeedAnswers - 1)) / totalVariants;
  const thirdEvent = (formula(goodQuestions, questions)) / totalVariants;

  if (noNeedAnswers > 1) {
    return (firstEvent + secondEvent + thirdEvent).toFixed(2);
  }
  return (firstEvent + secondEvent).toFixed(2);
};

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
