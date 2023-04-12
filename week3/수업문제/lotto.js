let lottoNumbers = [];

while (lottoNumbers.length < 7) {
  let randomNumber = Math.floor(Math.random() * 45) + 1;
  if (lottoNumbers.indexOf(randomNumber) === -1) {
    lottoNumbers.push(randomNumber);
  }
}

console.log(lottoNumbers);
