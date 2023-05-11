import { question } from 'readline-sync';
import {
  diceTask,
  companyTask,
  timeTask,
  boxTask,
  fifthTask
} from './index.js';

const start = () => {
  const dice = Number(question('Введи сумму выпавших значений: '));
  console.log(diceTask(dice));
  const company = (question(`Введи 3 числа в порядке задания.\nПример: 0.5 0.3 0.27\n`)).split(' ');
  console.log(companyTask(company));
  const time = (question('Введи разницу времени в минутах и два оставшихся числа.\nПример: 90 15 10\n')).split(' ');
  console.log(timeTask(time));
  const box = (question('Введи количество красных и синих бантиков: ')).split(' ');
  console.log(boxTask(box));
  console.log('Последнее задание: ');
  console.log(fifthTask());
};

console.log(start());
