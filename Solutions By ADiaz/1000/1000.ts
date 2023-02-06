import { readFileSync } from 'fs'

const input = readFileSync('./test-cases.txt', 'utf8');
const testCases = input.split('0 0');

const caseTreater = (newCase: Array<string>) => {
  const n = newCase.shift();
  const s = newCase.shift();
  let moves = newCase;

}

for (const newCase of testCases) {
  const getCase = newCase
    .split('\n')
    .map((line) => line.replace(/\r/g, ''))
    .filter((element) => element != '');

  if (getCase[0] === '0') break;
  else {
    caseTreater(
      newCase
        .split('\n')
        .map((line) => line.replace(/\r/g, ''))
        .filter((element) => element != '')
    )
  }
}
